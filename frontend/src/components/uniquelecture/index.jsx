import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLecture } from '../../api/api';
import Lecture from './Lecture';
import UniqueLecture from './UniqueLecture';

export default function Index() {
  const [lectureById, setLectureById] = useState(null);
  const { lectureId } = useParams();

  useEffect(() => {
    const fetchLecture = async () => {
      const data = await getLecture(lectureId);
      setLectureById(data);
    };
    fetchLecture();
  }, []);

  return (
    <UniqueLecture>
      {
        lectureById
          ? <Lecture lectureById={lectureById} />
          : null
      }
    </UniqueLecture>
  );
}
