import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg';
import { AIChatSession } from './../../../../service/AIModal';
import { toast } from 'sonner';

const PROMPT = 'position title: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experience level and No JSON array) , give me result in HTML tags'

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
    const [value, setValue] = useState(defaultValue);
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [loading, setLoading] = useState(false);

    const GenerateSummeryFromAI = async () => {
        if (!resumeInfo?.Experience[index]?.title) {
            toast('Please Add Position Title');
            return;
        }

        setLoading(true);
        const prompt = PROMPT.replace('{positionTitle}', resumeInfo.Experience[index].title);

        const result = await AIChatSession.sendMessage(prompt);
        console.log("AI Response (JSON Format):", result.response.text()); // Log the AI response in JSON format
        
        const resp = result.response.text();
        
        // Parse the response (assuming it's a JSON-like string)
        try {
            const parsedResponse = JSON.parse(resp);

            // Get the bullet points from the parsed response
            const bulletPoints = parsedResponse?.bulletPoints || [];
            
            // Convert the bullet points array into HTML <ul><li></li></ul>
            const formattedBulletPoints = bulletPoints.map(point => `<li>${point}</li>`).join('');
            const htmlFormattedResponse = `<ul>${formattedBulletPoints}</ul>`;  // Wrap the bullet points in a <ul>

            // Set the HTML formatted response in the editor
            setValue(htmlFormattedResponse);
        } catch (error) {
            console.error('Error parsing AI response:', error);
            toast.error('Failed to generate summary. Please try again.');
        }

        setLoading(false);
    }

    return (
        <div>
            <div className='flex justify-between my-2'>
                <label className='text-xs'>Summary</label>
                <Button variant="outline" size="sm"
                    onClick={GenerateSummeryFromAI}
                    disabled={loading}
                    className="flex gap-2 border-emerald-400 text-emerald-400">
                    {loading ? 
                        <LoaderCircle className='animate-spin' /> : 
                        <>
                            <Brain className='h-4 w-4' /> Generate from AI
                        </>
                    }
                </Button>
            </div>

            <EditorProvider>
                <Editor 
                    value={value} 
                    onChange={(e) => {
                        setValue(e.target.value);
                        onRichTextEditorChange(e);
                    }} 
                    // Use dangerouslySetInnerHTML to render the HTML content
                    dangerouslySetInnerHTML={{ __html: value }}
                >
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    )
}

export default RichTextEditor;
