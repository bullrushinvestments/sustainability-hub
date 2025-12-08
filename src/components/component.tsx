import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Typography, Box, InputLabel, Select, MenuItem, FormControl, FormHelperText } from '@mui/material';

interface BusinessSpecification {
    name: string;
    description: string;
    industry: string;
    features: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecification>();
    const [loading, setLoading] = useState(false);
    const [industries, setIndustries] = useState<Array<{ value: string; label: string }>>([]);

    useEffect(() => {
        axios.get('/api/industries') // Assume this is an API endpoint to fetch industries
            .then(response => setIndustries(response.data.map(industry => ({ value: industry, label: industry }))))
            .catch(error => console.error('Failed to load industries', error));
    }, []);

    const onSubmit = (data: BusinessSpecification) => {
        setLoading(true);
        axios.post('/api/business-specifications', data)
            .then(() => {
                reset();
                alert('Business specification created successfully!');
            })
            .catch(error => console.error('Failed to create business specification', error))
            .finally(() => setLoading(false));
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <Controller
                name="name"
                control={control}
                rules={{
                    required: 'This field is required',
                    minLength: { value: 3, message: 'Name must be at least 3 characters' }
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Business Name"
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )}
            />

            <Controller
                name="description"
                control={control}
                rules={{ required: 'This field is required' }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        multiline
                        rows={4}
                        id="description"
                        label="Description"
                        error={!!errors.description}
                        helperText={errors.description?.message}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )}
            />

            <FormControl variant="outlined" margin="normal" fullWidth>
                <InputLabel htmlFor="industry">Industry</InputLabel>
                <Select
                    native
                    inputProps={{ id: 'industry' }}
                    {...control.register('industry')}
                    error={!!errors.industry}
                >
                    {industries.map(({ value, label }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </Select>
                {errors.industry && <FormHelperText error>{errors.industry.message}</FormHelperText>}
            </FormControl>

            <Controller
                name="features"
                control={control}
                rules={{ required: 'This field is required' }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        id="features"
                        label="Features (comma separated)"
                        error={!!errors.features}
                        helperText={errors.features?.message}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )}
            />

            <Box mt={3}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    sx={{ textTransform: 'none' }}
                >
                    {loading ? (
                        <CircularProgress size={24} color="inherit" />
                    ) : (
                        'Create Business Specification'
                    )}
                </Button>
            </Box>

            <Typography variant="body1">
                * Indicates a required field
            </Typography>
        </Box>
    );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Typography, Box, InputLabel, Select, MenuItem, FormControl, FormHelperText } from '@mui/material';

interface BusinessSpecification {
    name: string;
    description: string;
    industry: string;
    features: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecification>();
    const [loading, setLoading] = useState(false);
    const [industries, setIndustries] = useState<Array<{ value: string; label: string }>>([]);

    useEffect(() => {
        axios.get('/api/industries') // Assume this is an API endpoint to fetch industries
            .then(response => setIndustries(response.data.map(industry => ({ value: industry, label: industry }))))
            .catch(error => console.error('Failed to load industries', error));
    }, []);

    const onSubmit = (data: BusinessSpecification) => {
        setLoading(true);
        axios.post('/api/business-specifications', data)
            .then(() => {
                reset();
                alert('Business specification created successfully!');
            })
            .catch(error => console.error('Failed to create business specification', error))
            .finally(() => setLoading(false));
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <Controller
                name="name"
                control={control}
                rules={{
                    required: 'This field is required',
                    minLength: { value: 3, message: 'Name must be at least 3 characters' }
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Business Name"
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )}
            />

            <Controller
                name="description"
                control={control}
                rules={{ required: 'This field is required' }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        multiline
                        rows={4}
                        id="description"
                        label="Description"
                        error={!!errors.description}
                        helperText={errors.description?.message}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )}
            />

            <FormControl variant="outlined" margin="normal" fullWidth>
                <InputLabel htmlFor="industry">Industry</InputLabel>
                <Select
                    native
                    inputProps={{ id: 'industry' }}
                    {...control.register('industry')}
                    error={!!errors.industry}
                >
                    {industries.map(({ value, label }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </Select>
                {errors.industry && <FormHelperText error>{errors.industry.message}</FormHelperText>}
            </FormControl>

            <Controller
                name="features"
                control={control}
                rules={{ required: 'This field is required' }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        id="features"
                        label="Features (comma separated)"
                        error={!!errors.features}
                        helperText={errors.features?.message}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )}
            />

            <Box mt={3}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    sx={{ textTransform: 'none' }}
                >
                    {loading ? (
                        <CircularProgress size={24} color="inherit" />
                    ) : (
                        'Create Business Specification'
                    )}
                </Button>
            </Box>

            <Typography variant="body1">
                * Indicates a required field
            </Typography>
        </Box>
    );
};

export default CreateBusinessSpecification;