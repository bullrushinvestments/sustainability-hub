import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface TestFormValues {
  testName: string;
  testDescription: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState } = useForm<TestFormValues>();
  const toast = useToast();

  const onSubmit: SubmitHandler<TestFormValues> = async (data) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      reset();
      toast({
        title: 'Test created successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      setError('An error occurred while creating the test.');
      toast({
        title: 'Error creating test',
        description: err instanceof Error ? err.message : 'Unknown error',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Write Test Form">
      <div className="mb-4">
        <label htmlFor="testName" className="block text-sm font-medium text-gray-700">Test Name</label>
        <input
          id="testName"
          type="text"
          {...register('testName', { required: true })}
          placeholder="Enter test name..."
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="testDescription" className="block text-sm font-medium text-gray-700">Test Description</label>
        <textarea
          id="testDescription"
          {...register('testDescription', { required: true })}
          placeholder="Enter test description..."
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={loading || formState.isSubmitting}
        className={`inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        {loading || formState.isSubmitting ? 'Creating...' : 'Create Test'}
      </button>
      
      {error && (
        <div className="mt-3 p-4 bg-red-100 rounded-lg">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}
    </form>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface TestFormValues {
  testName: string;
  testDescription: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState } = useForm<TestFormValues>();
  const toast = useToast();

  const onSubmit: SubmitHandler<TestFormValues> = async (data) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      reset();
      toast({
        title: 'Test created successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      setError('An error occurred while creating the test.');
      toast({
        title: 'Error creating test',
        description: err instanceof Error ? err.message : 'Unknown error',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Write Test Form">
      <div className="mb-4">
        <label htmlFor="testName" className="block text-sm font-medium text-gray-700">Test Name</label>
        <input
          id="testName"
          type="text"
          {...register('testName', { required: true })}
          placeholder="Enter test name..."
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="testDescription" className="block text-sm font-medium text-gray-700">Test Description</label>
        <textarea
          id="testDescription"
          {...register('testDescription', { required: true })}
          placeholder="Enter test description..."
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={loading || formState.isSubmitting}
        className={`inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        {loading || formState.isSubmitting ? 'Creating...' : 'Create Test'}
      </button>
      
      {error && (
        <div className="mt-3 p-4 bg-red-100 rounded-lg">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}
    </form>
  );
};

export default WriteTests;