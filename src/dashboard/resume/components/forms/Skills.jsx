import { Input } from '@/components/ui/input';
import React, { useContext, useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import GlobalApi from './../../../../../service/GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

function Skills() {
  const [skillsList, setSkillsList] = useState([
    {
      name: '',
      rating: 0,
    },
  ]);
  const { resumeId } = useParams();
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  useEffect(() => {
    if (resumeInfo) {
      setSkillsList(resumeInfo.skills || []);
    }
  }, [resumeInfo]);

  const handleChange = (index, name, value) => {
    const newEntries = [...skillsList];
    newEntries[index][name] = value;
    setSkillsList(newEntries);
  };

  const AddNewSkills = () => {
    setSkillsList((prev) => [
      ...prev,
      {
        name: '',
        rating: 0,
      },
    ]);
  };

  const RemoveSkills = () => {
    setSkillsList((prev) => prev.slice(0, -1));
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        skills: skillsList.map(({ id, ...rest }) => rest),
      },
    };

    GlobalApi.UpdateResumeDetail(resumeId, data)
      .then((resp) => {
        console.log(resp);
        setLoading(false);
        toast('Details updated !');
        // Update resume info here directly after save
        setResumeInfo((prev) => ({
          ...prev,
          skills: skillsList,
        }));
      })
      .catch((error) => {
        setLoading(false);
        toast('Server Error, Try again!');
      });
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-emerald-500 border-t-4 mt-10">
      <h2 className="font-bold text-lg text-emerald-500">Skills</h2>
      <p className="text-gray-600">Add Your top professional key skills</p>

      <div>
        {skillsList.map((item, index) => (
          <div className="flex justify-between mb-2 border rounded-lg p-3 border-emerald-500" key={index}>
            <div>
              <label className="text-xs text-gray-600">Name</label>
              <Input
                className="w-full text-emerald-700 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                value={item.name} // use value instead of defaultValue
                onChange={(e) => handleChange(index, 'name', e.target.value)}
              />
            </div>
            <Rating
              style={{ maxWidth: 120 }}
              value={item.rating}
              onChange={(v) => handleChange(index, 'rating', v)}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" onClick={AddNewSkills} className="text-emerald-500 border-emerald-500 hover:bg-emerald-50">
            + Add More Skill
          </Button>
          <Button variant="outline" onClick={RemoveSkills} className="text-emerald-500 border-emerald-500 hover:bg-emerald-50">
            - Remove
          </Button>
        </div>
        <Button disabled={loading} onClick={onSave} className="bg-emerald-500 text-white hover:bg-emerald-600">
          {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
        </Button>
      </div>
    </div>
  );
}

export default Skills;
