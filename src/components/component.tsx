import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpecForm {
  businessName: string;
  industryType: string;
  numberOfUsers: number;
  featuresRequired: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecForm>();

  const onSubmit: SubmitHandler<BusinessSpecForm> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/business-specification', data);
      reset();
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Business Specification</h1>
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Business specification form">
        <div className="mb-4">
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
          <input
            id="businessName"
            type="text"
            {...register('businessName', { required: 'This is required' })}
            className={clsx(
              "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
              errors.businessName && 'border-red-500'
            )}
          />
          {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName.message}</p>}
        </div>
        
        {/* Add more form fields similarly */}
        
        <button
          type="submit"
          disabled={loading}
          className={clsx(
            "mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            loading && "opacity-50 cursor-not-allowed"
          )}
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpecForm {
  businessName: string;
  industryType: string;
  numberOfUsers: number;
  featuresRequired: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecForm>();

  const onSubmit: SubmitHandler<BusinessSpecForm> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/business-specification', data);
      reset();
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Business Specification</h1>
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Business specification form">
        <div className="mb-4">
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
          <input
            id="businessName"
            type="text"
            {...register('businessName', { required: 'This is required' })}
            className={clsx(
              "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
              errors.businessName && 'border-red-500'
            )}
          />
          {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName.message}</p>}
        </div>
        
        {/* Add more form fields similarly */}
        
        <button
          type="submit"
          disabled={loading}
          className={clsx(
            "mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            loading && "opacity-50 cursor-not-allowed"
          )}
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;