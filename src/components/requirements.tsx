import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  name: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [newRequirementName, setNewRequirementName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('/api/requirements');
      setRequirements(response.data);
    } catch (error) {
      console.error('Error fetching requirements:', error);
    } finally {
      setLoading(false);
    }
  };

  const addRequirement = async () => {
    if (!newRequirementName.trim()) return;

    try {
      setLoading(true);
      await axios.post('/api/requirements', { name: newRequirementName });
      setNewRequirementName('');
      fetchRequirements();
    } catch (error) {
      console.error('Error adding requirement:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleRequirementCompletion = async (requirementId: string) => {
    try {
      await axios.put(`/api/requirements/${requirementId}`);
      fetchRequirements();
    } catch (error) {
      console.error('Error toggling requirement completion:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      <form onSubmit={(e) => { e.preventDefault(); addRequirement(); }}>
        <input
          type="text"
          placeholder="Enter requirement name..."
          value={newRequirementName}
          onChange={(e) => setNewRequirementName(e.target.value)}
          className="border p-2 mb-4 w-full"
          aria-label="Add new requirement input"
          required
        />
        <button
          type="submit"
          disabled={!newRequirementName.trim()}
          className={`bg-blue-500 text-white py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-label="Add new requirement button"
        >
          {loading ? 'Loading...' : 'Add Requirement'}
        </button>
      </form>

      <ul className="mt-6">
        {requirements.map((requirement) => (
          <li key={requirement.id} className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={requirement.isCompleted}
              onChange={() => toggleRequirementCompletion(requirement.id)}
              aria-label={`Toggle requirement ${requirement.name}`}
            />
            <span
              className={`${requirement.isCompleted ? 'line-through text-gray-500' : ''} ml-2`}
              aria-live="polite"
            >
              {requirement.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  name: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [newRequirementName, setNewRequirementName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('/api/requirements');
      setRequirements(response.data);
    } catch (error) {
      console.error('Error fetching requirements:', error);
    } finally {
      setLoading(false);
    }
  };

  const addRequirement = async () => {
    if (!newRequirementName.trim()) return;

    try {
      setLoading(true);
      await axios.post('/api/requirements', { name: newRequirementName });
      setNewRequirementName('');
      fetchRequirements();
    } catch (error) {
      console.error('Error adding requirement:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleRequirementCompletion = async (requirementId: string) => {
    try {
      await axios.put(`/api/requirements/${requirementId}`);
      fetchRequirements();
    } catch (error) {
      console.error('Error toggling requirement completion:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      <form onSubmit={(e) => { e.preventDefault(); addRequirement(); }}>
        <input
          type="text"
          placeholder="Enter requirement name..."
          value={newRequirementName}
          onChange={(e) => setNewRequirementName(e.target.value)}
          className="border p-2 mb-4 w-full"
          aria-label="Add new requirement input"
          required
        />
        <button
          type="submit"
          disabled={!newRequirementName.trim()}
          className={`bg-blue-500 text-white py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-label="Add new requirement button"
        >
          {loading ? 'Loading...' : 'Add Requirement'}
        </button>
      </form>

      <ul className="mt-6">
        {requirements.map((requirement) => (
          <li key={requirement.id} className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={requirement.isCompleted}
              onChange={() => toggleRequirementCompletion(requirement.id)}
              aria-label={`Toggle requirement ${requirement.name}`}
            />
            <span
              className={`${requirement.isCompleted ? 'line-through text-gray-500' : ''} ml-2`}
              aria-live="polite"
            >
              {requirement.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;