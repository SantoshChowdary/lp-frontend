const courseData = [
    {
        course_id: "8f14e45f-ea2e-4c14-95ed-4fc3b2636ff0",
        course_title: "Introduction to JavaScript",
        course_description: "Learn the fundamentals of JavaScript, the language of the web.",
        course_image: "https://via.placeholder.com/400x200.png?text=JavaScript+Course",
        course_meta_data: "{}",
        course_completion_percentage: 20,
        is_completed: false,
        is_locked: false,
        topics: [
            {
                topic_id: "f46db5bb-5e6e-4f97-8fb8-f29c7c8570ae",
                topic_title: "JavaScript Basics",
                topic_description: "Introduction to basic JavaScript syntax and concepts.",
                topic_meta_data: "{}",
                is_completed: false,
                is_locked: false,
                units: [
                    {
                        unit_id: "b89ae654-4e5c-4b71-8c56-dcf8f8d8d9fb",
                        unit_title: "Variables and Data Types",
                        unit_type: "video",
                        unit_durations: 10,
                        is_completed: false,
                        is_locked: false
                    }
                ]
            }
        ]
    },
    {
        course_id: "b3a1b8a7-1d9e-4f0f-9342-6e729c0b0a4f",
        course_title: "HTML and CSS for Beginners",
        course_description: "Start your web development journey with HTML and CSS.",
        course_image: "https://via.placeholder.com/400x200.png?text=HTML+CSS+Course",
        course_meta_data: "{}",
        course_completion_percentage: 50,
        is_completed: false,
        is_locked: false,
        topics: [
            {
                topic_id: "4c9e0f98-54d1-4f19-b299-26c4e1ab12f9",
                topic_title: "HTML Basics",
                topic_description: "Learn the structure of a webpage with HTML tags and elements.",
                topic_meta_data: "{}",
                is_completed: false,
                is_locked: true,
                units: [
                    {
                        unit_id: "8d2c5a7b-0d7e-48f2-909f-3d23a5d24793",
                        unit_title: "HTML Elements",
                        unit_type: "text",
                        unit_durations: 8,
                        is_completed: false,
                        is_locked: true
                    }
                ]
            }
        ]
    },
    {
        course_id: "7b1d8c98-aacf-4f76-b0a3-714db1729a1c",
        course_title: "CSS Fundamentals",
        course_description: "A comprehensive guide to styling your website with CSS.",
        course_image: "https://via.placeholder.com/400x200.png?text=CSS+Course",
        course_meta_data: "{}",
        course_completion_percentage: 0,
        is_completed: false,
        is_locked: true,
        topics: [
            {
                topic_id: "a2c83d74-567b-49de-85d6-92a94dba1b34",
                topic_title: "CSS Basics",
                topic_description: "Understand the basics of styling with CSS properties.",
                topic_meta_data: "{}",
                is_completed: false,
                is_locked: true,
                units: [
                    {
                        unit_id: "d8263f8c-7d2b-4c45-b0a5-1e5db33f8a27",
                        unit_title: "Selectors and Properties",
                        unit_type: "video",
                        unit_durations: 12,
                        is_completed: false,
                        is_locked: true
                    }
                ]
            }
        ]
    },
    {
        course_id: "fa798c22-b911-4b78-a0c2-627dc167d9e9",
        course_title: "Advanced JavaScript",
        course_description: "Deep dive into JavaScript with advanced concepts and techniques.",
        course_image: "https://via.placeholder.com/400x200.png?text=Advanced+JavaScript",
        course_meta_data: "{}",
        course_completion_percentage: 30,
        is_completed: false,
        is_locked: false,
        topics: [
            {
                topic_id: "b73a62e3-2dbb-4ec5-8507-bd1f28be526a",
                topic_title: "Closures and Scopes",
                topic_description: "Learn how closures and scopes work in JavaScript.",
                topic_meta_data: "{}",
                is_completed: false,
                is_locked: false,
                units: [
                    {
                        unit_id: "f1c22b58-73b2-4b76-9d7e-9d64c0d8a8a4",
                        unit_title: "Understanding Closures",
                        unit_type: "text",
                        unit_durations: 15,
                        is_completed: false,
                        is_locked: false
                    }
                ]
            }
        ]
    },
    {
        course_id: "d7ad1bb5-4732-4378-843a-cfb03cfa2f37",
        course_title: "React for Beginners",
        course_description: "Get started with React, a popular JavaScript library for building UIs.",
        course_image: "https://via.placeholder.com/400x200.png?text=React+Course",
        course_meta_data: "{}",
        course_completion_percentage: 60,
        is_completed: false,
        is_locked: false,
        topics: [
            {
                topic_id: "53f8c6db-0832-453f-93c1-25654b18e8f7",
                topic_title: "React Basics",
                topic_description: "Learn about components, JSX, and props in React.",
                topic_meta_data: "{}",
                is_completed: false,
                is_locked: false,
                units: [
                    {
                        unit_id: "e5e1e8f6-7c2c-473b-8f5f-1c4c3dcd809b",
                        unit_title: "Intro to Components",
                        unit_type: "video",
                        unit_durations: 10,
                        is_completed: false,
                        is_locked: false
                    }
                ]
            }
        ]
    },
    {
        course_id: "c2a7fbb9-ccae-49a7-a3b9-4f4c0899bf07",
        course_title: "Node.js Fundamentals",
        course_description: "Explore server-side JavaScript with Node.js.",
        course_image: "https://via.placeholder.com/400x200.png?text=Node+Course",
        course_meta_data: "{}",
        course_completion_percentage: 0,
        is_completed: false,
        is_locked: true,
        topics: [
            {
                topic_id: "f3548e9c-c28d-4ffb-bef4-e2d812089d92",
                topic_title: "Setting up Node",
                topic_description: "Learn how to set up and configure Node.js.",
                topic_meta_data: "{}",
                is_completed: false,
                is_locked: true,
                units: [
                    {
                        unit_id: "345e6dbf-933e-4c87-9738-0a5e9c3b2f72",
                        unit_title: "Installing Node.js",
                        unit_type: "text",
                        unit_durations: 500,
                        is_completed: false,
                        is_locked: true
                    }
                ]
            }
        ]
    },
];

export default courseData;
