import React, { useContext, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { LayoutGrid } from 'lucide-react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import GlobalApi from './../../../../service/GlobalApi'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

function ThemeColor() {
    const colors=[
        "#000000"
    ]

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
    const [selectedColor,setSelectedColor]=useState();
    const {resumeId}=useParams();
    const onColorSelect=(color)=>{
        setSelectedColor(color)
        setResumeInfo({
            ...resumeInfo,
            themeColor:color
        });
        const data={
            data:{
                themeColor:color
            }
        }
        GlobalApi.UpdateResumeDetail(resumeId,data).then(resp=>{
            console.log(resp);
            toast('Theme Color Updated')
        })
    }

  return (
    <Popover>
  <PopoverTrigger asChild>
  <Button variant="outline" size="sm" 
          className="flex gap-2" > <LayoutGrid/> Theme</Button>
  </PopoverTrigger>
  <PopoverContent>
    <h2 className='mb-2 text-sm font-bold'>Select Theme Color</h2>
    <div className='grid grid-cols-5 gap-3'>
        {colors.map((item,index)=>(
            <div 
            onClick={()=>onColorSelect(item)}
            className={`h-5 w-5 rounded-full cursor-pointer
             hover:border-black border
             ${selectedColor==item&&'border border-black'}
             `}
            style={{
                background:item
            }}>

            </div>
        ))}
    </div>
  </PopoverContent>
</Popover>
  )
}

export default ThemeColor