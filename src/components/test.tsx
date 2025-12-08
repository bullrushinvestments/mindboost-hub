import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

interface Option {
  id: number;
  value: string;
  isCorrect: boolean;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [test, setTest] = useState<Test | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTests();
  }, []);

  const fetchTests = async () => {
    try {
      const response = await axios.get<Test>('https://api.example.com/tests');
      setTest(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load tests.');
      setLoading(false);
    }
  };

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  const handleSave = async () => {
    try {
      await axios.put(`https://api.example.com/tests/${test.id}`, test);
      router.push(`/tests/${test.id}`);
    } catch (err) {
      setError('Failed to save the test.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Write Test</h1>
      {test && (
        <>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={test.title}
              onChange={(e) => setTest({ ...test, title: e.target.value })}
              className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={test.description}
              onChange={(e) => setTest({ ...test, description: e.target.value })}
              rows={4}
              className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          {test.questions.map((question) => (
            <div key={question.id} className="mb-4">
              <label htmlFor={`q${question.id}`} className="block text-sm font-medium text-gray-700">
                Question
              </label>
              <input
                type="text"
                id={`q${question.id}`}
                value={question.text}
                onChange={(e) => {
                  const newQuestions = test.questions.map(q =>
                    q.id === question.id ? { ...q, text: e.target.value } : q
                  );
                  setTest({ ...test, questions: newQuestions });
                }}
                className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition ease-in-out duration-150"
          >
            Save Test
          </button>
        </>
      )}
    </div>
  );
};

export default WriteTests;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

interface Option {
  id: number;
  value: string;
  isCorrect: boolean;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [test, setTest] = useState<Test | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTests();
  }, []);

  const fetchTests = async () => {
    try {
      const response = await axios.get<Test>('https://api.example.com/tests');
      setTest(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load tests.');
      setLoading(false);
    }
  };

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  const handleSave = async () => {
    try {
      await axios.put(`https://api.example.com/tests/${test.id}`, test);
      router.push(`/tests/${test.id}`);
    } catch (err) {
      setError('Failed to save the test.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Write Test</h1>
      {test && (
        <>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={test.title}
              onChange={(e) => setTest({ ...test, title: e.target.value })}
              className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={test.description}
              onChange={(e) => setTest({ ...test, description: e.target.value })}
              rows={4}
              className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          {test.questions.map((question) => (
            <div key={question.id} className="mb-4">
              <label htmlFor={`q${question.id}`} className="block text-sm font-medium text-gray-700">
                Question
              </label>
              <input
                type="text"
                id={`q${question.id}`}
                value={question.text}
                onChange={(e) => {
                  const newQuestions = test.questions.map(q =>
                    q.id === question.id ? { ...q, text: e.target.value } : q
                  );
                  setTest({ ...test, questions: newQuestions });
                }}
                className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition ease-in-out duration-150"
          >
            Save Test
          </button>
        </>
      )}
    </div>
  );
};

export default WriteTests;