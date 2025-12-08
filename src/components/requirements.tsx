import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

interface FormData {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<FormData>();
  const router = useRouter();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    }
    setLoading(false);
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await axios.post('/api/requirements', data);
      reset();
      router.push('/');
    } catch (err) {
      setError('Failed to submit requirement.');
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="requirementName" className="block text-gray-700 text-sm font-bold mb-2">Requirement Name</label>
          <input
            type="text"
            id="requirementName"
            name="requirementName"
            ref={register({ required: true })}
            placeholder="Enter requirement name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="requirementDescription" className="block text-gray-700 text-sm font-bold mb-2">Requirement Description</label>
          <textarea
            id="requirementDescription"
            name="requirementDescription"
            ref={register({ required: true })}
            placeholder="Enter requirement description"
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type="submit" disabled={loading} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {loading ? 'Submitting...' : 'Submit Requirement'}
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Requirements List</h2>
        <ul role="list" aria-live="polite" className="mt-4 list-disc pl-5 space-y-1 text-gray-700">
          {requirements.map((requirement) => (
            <li key={requirement.id} className="flex items-center justify-between">
              <span>{requirement.name}</span>
              <button onClick={() => console.log('Delete requirement')} className="text-red-500 hover:text-red-700">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

interface FormData {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<FormData>();
  const router = useRouter();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    }
    setLoading(false);
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await axios.post('/api/requirements', data);
      reset();
      router.push('/');
    } catch (err) {
      setError('Failed to submit requirement.');
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="requirementName" className="block text-gray-700 text-sm font-bold mb-2">Requirement Name</label>
          <input
            type="text"
            id="requirementName"
            name="requirementName"
            ref={register({ required: true })}
            placeholder="Enter requirement name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="requirementDescription" className="block text-gray-700 text-sm font-bold mb-2">Requirement Description</label>
          <textarea
            id="requirementDescription"
            name="requirementDescription"
            ref={register({ required: true })}
            placeholder="Enter requirement description"
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type="submit" disabled={loading} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {loading ? 'Submitting...' : 'Submit Requirement'}
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Requirements List</h2>
        <ul role="list" aria-live="polite" className="mt-4 list-disc pl-5 space-y-1 text-gray-700">
          {requirements.map((requirement) => (
            <li key={requirement.id} className="flex items-center justify-between">
              <span>{requirement.name}</span>
              <button onClick={() => console.log('Delete requirement')} className="text-red-500 hover:text-red-700">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GatherRequirements;