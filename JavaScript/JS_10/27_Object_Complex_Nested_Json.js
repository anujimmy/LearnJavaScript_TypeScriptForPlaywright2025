let compJson = `{
    "company": "EYDelta Pvt Ltd",
    "location": "Bangalore, India",
    "employees": [
        {
            "id": 101,
            "name": "Jitendra Parit",
            "position": "CTO",
            "skills": [
                "Motor Design",
                "Embedded Systems",
                "Product Strategy"
            ],
            "projects": [
                {
                    "name": "Drone BLDC Motor",
                    "status": "Ongoing",
                    "technologies": [
                        "Aluminum Rotor",
                        "Sensorless FOC",
                        "KiCad PCB"
                    ]
                },
                {
                    "name": "Robotic Actuator",
                    "status": "Completed",
                    "technologies": [
                        "Closed-loop Control",
                        "CAN Bus"
                    ]
                }
            ]
        },
        {
            "id": 102,
            "name": "Amit Sharma",
            "position": "Embedded Software Engineer",
            "skills": [
                "C++",
                "RTOS",
                "INAV"
            ],
            "projects": [
                {
                    "name": "Smart BMS",
                    "status": "In R&D",
                    "technologies": [
                        "Li-Ion Safety",
                        "CAN",
                        "Python Automation"
                    ]
                }
            ]
        }
    ]
}`;

// Parse complex JSON
let comp = JSON.parse(compJson);
console.log(comp);
console.dir(comp, { depth: null }); // Print with full depth
console.log(typeof (comp));          // "object"