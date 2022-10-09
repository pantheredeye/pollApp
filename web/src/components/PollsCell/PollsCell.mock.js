// Define your own mock data here:
export const standard = () => ({
  polls: [
    {
      id: 1,
      question: 'What is your market?',
      answers: [
        {
          id: 1,
          answer:
            'The answer to this question depends on a lot of variable factors.',
        },
        { id: 2, answer: 'B2C' },
        { id: 3, answer: 'C2C' },
        { id: 4, answer: 'Government' },
      ],
    },
    {
      id: 2,
      question: 'How many employees do you have?',
      answers: [
        {
          id: 1,
          answer: '1',
        },
        { id: 2, answer: '2-5' },
        { id: 3, answer: '6-15' },
        { id: 4, answer: '16+' },
      ],
    },
    {
      id: 3,
      question: 'What is the current state of your startup?',
      answers: [
        {
          id: 1,
          answer: 'Ideation',
        },
        { id: 2, answer: 'Pre-Seed (Funding < 100k)' },
        { id: 3, answer: 'Seed ($100k-3mm)' },
        { id: 4, answer: 'Growth ($3mm+)' },
        { id: 5, answer: 'Bootstrapped' },
      ],
    },
  ],
})
