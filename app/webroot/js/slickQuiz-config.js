// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "The Ultimate QUIZ!!",
        "main": "<p>Think you're smart enough to be on the CCIS Quiz Show? Find out with this super crazy knowledge quiz!</p>",
        "results": "<h2>Aaaaaand...</h2><p>The END! Are the questions too hard? Yes. They are.</p><p>We know you did a great job at trying not to cheat (really) and get here, but there might be more skillfull hackers out there who ought to be the next CCIS Quiz Show Champion. Well, just wait and we'll tell you if your team got it into the final round. Good luck! :D</p>",
        "level1": "Cheater or not, you still made it here. Good luck.",
        "level2": "Wicked. Hang on and we might contact you for being a contestant at the quiz show. We might, tho. :D",
        "level3": "ALMOST THERE. Just hope that they can't do better than you did.",
        "level4": "Shoot for the stars bro, but it ain't coming true. >__>",
        "level5": "No. You aren't cut for this. Sorry. :D" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What is the final build (RTM) version of Windows 8.1?",
            "a": [
                {"option": "6.3.6900", "correct": false},
                {"option": "6.3.9600", "correct": true},
                {"option": "6.3.9660", "correct": false},
                {"option": "6.3.6990", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "IEEE stands for:",
            "a": [
                {"option": "Institute of Electronics and Electrical Engineers", "correct": false},
                {"option": "Institute of Electrical and Electronics Engineers", "correct": true},
                {"option": "Institution of Electrical EnginEers", "correct": false},
                {"option": "Institution of Electrical and Electronics Engineers", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is the result of calculating the arithmetic expression \"B6–7C\"? Here, all numbers are represented in unsigned hexadecimal.",
            "a": [
                {"option": "32", "correct": false},
                {"option": "3A", "correct": true},
                {"option": "B2", "correct": false},
                {"option": "BA", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "There are several formats for representing an integer in a computer. When a set of unsigned binary integers that are arranged in ascending order is interpreted in different formats and then sorted again in ascending order of their values, which of the following is the format that maintains the same order as the original unsigned binary integers?",
            "a": [
                {"option": "Biased (i.e., offset binary) format", "correct": true},
                {"option": "One’s complement format", "correct": false},
                {"option": "Signed magnitude format", "correct": false},
                {"option": "Two’s complement format", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The distribution of days that are required to complete a certain activity can be approximated by a standard normal distribution with a mean of 500 days and a standard deviation of 12 days. What is the approximate 95% confidence interval in days for the activity?",
            "a": [
                {"option": "Between 464 and 536", "correct": false},
                {"option": "Between 476 and 524", "correct": true},
                {"option": "Between 488 and 512", "correct": false},
                {"option": "Between 494 and 506", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "There is a series of project activities to be performed by two staff members, Mr. X and Mr. Y. When each of them works alone, it can be completed by Mr. X in 3 hours and by Mr. Y in 6 hours. When Mr. X starts to work at 9:00 a.m. and then Mr. Y starts to work with Mr. X at 10:00 a.m., which of the following is the time at which all the activities are completed? Here, the activities can be divided and performed in parallel by the two members without any loss of productivity.",
            "a": [
                {"option": "10:20 a.m.", "correct": false},
                {"option": "10:40 a.m.", "correct": false},
                {"option": "11:20 a.m.", "correct": true},
                {"option": "11:40 a.m.", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The figure below shows the state transition diagram of an automaton. Which of the following is a bit string for which the automaton stops in the accepting (or final) state after the entire bit string has been read? Here, the double circle marked with \"q<sub>3</sub>\" represents the accepting state.<br/><br/><img class='img-responsive' src='img/quiz/automata1.png'>",
            "a": [
                {"option": "1011", "correct": false},
                {"option": "1100", "correct": false},
                {"option": "1101", "correct": true},
                {"option": "1110", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is the logical expression whose resulting value is zero (0) only when the binary values of \"x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub>\" are all zeros (0s) or all ones (1s)? Here, \"·\" and \"+\" represent the logical product and logical sum operators respectively, and \"x\" is the logical negation of \"x\".",
            "a": [
                {"option": "\\((x_{1}\\cdot x_{2}\\cdot \\cdots x_{n}) + (x_{1}+x_{2}+\\cdots x_{n})\\)", "correct": false},
                {"option": "\\((x_{1}\\cdot x_{2}\\cdot \\cdots x_{n}) + \\overline{(x_{1}+x_{2}+\\cdots x_{n})}\\)", "correct": false},
                {"option": "\\(\\overline{(x_{1}\\cdot x_{2}\\cdot \\cdots x_{n}) + (x_{1}+x_{2}+\\cdots x_{n})}\\)", "correct": false},
                {"option": "\\(\\overline{(x_{1}\\cdot x_{2}\\cdot \\cdots x_{n}) + \\overline{(x_{1}+x_{2}+\\cdots x_{n})}}\\)", "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "When \"11\" is inserted in the min-heap shown below, which of the following min-heaps is created? Here, a new node is first placed at the bottom (or last) of the tree, and then it is shifted up to its proper place to maintain the min-heap structure.<br /><br /><img class='img-responsive' src='img/quiz/binarytree1.PNG'>",
            "a": [
                {"option": "<img class='img-responsive' src='img/quiz/binarytree1a.PNG'>", "correct": false},
                {"option": "<img class='img-responsive' src='img/quiz/binarytree1b.PNG'>", "correct": true},
                {"option": "<img class='img-responsive' src='img/quiz/binarytree1c.PNG'>", "correct": false},
                {"option": "<img class='img-responsive' src='img/quiz/binarytree1d.PNG'>", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The figure below shows the structure of a singly-linked list. In order to insert Philadelphia between New York and Washington DC, which of the following is an appropriate operation to be performed? Here, \"null\" indicates the end of the list.<br /><br/><p><strong>Head Pointer:</strong> <span class='badge'>10</span></p><div class='table-responsive'><table class='table table-condensed'>" +
                "<thead><tr><th>Address</th><th>Element</th><th>Pointer</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>10</td><td>Boston</td><td>50</td></tr>" +
                "<tr><td>30</td><td>Miami</td><td>null</td></tr>" +
                "<tr><td>50</td><td>New York</td><td>90</td></tr>" +
                "<tr><td>70</td><td>Atlanta</td><td>30</td></tr>" +
                "</tbody>" +
                "</table></div>",
            "a": [
                {"option": "The pointers for New York and Philadelphia are set to 90 and 110 respectively.", "correct": false},
                {"option": "The pointers for New York and Philadelphia are set to 110 and 50 respectively.", "correct": false},
                {"option": "The pointers for New York and Philadelphia are set to 110 and 70 respectively.", "correct": false},
                {"option": "The pointers for New York and Philadelphia are set to 110 and 90 respectively.", "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "In the binary search tree shown below, which of the following is the appropriate sequence of nodes that are visited in an in-order traversal?<br /><br/><img src='img/quiz/binarytree2.PNG' class='img-responsive' >",
            "a": [
                {"option": "\\(A\\rightarrow B\\rightarrow C\\rightarrow D\\rightarrow E\\rightarrow F\\)", "correct": false},
                {"option": "\\(A\\rightarrow B\\rightarrow D\\rightarrow E\\rightarrow C\\rightarrow F\\)", "correct": false},
                {"option": "\\(D\\rightarrow B\\rightarrow E\\rightarrow A\\rightarrow C\\rightarrow F\\)", "correct": true},
                {"option": "\\(D\\rightarrow E\\rightarrow B\\rightarrow F\\rightarrow C\\rightarrow A\\)", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is the software development process model that aims to achieve a high degree of completion of a system by dividing the system into some subsystems and repeating the development cycle for each subsystem in consideration of minimizing the risk in each cycle?",
            "a": [
                {"option": "Evolutional model", "correct": false},
                {"option": "Incremental model", "correct": false},
                {"option": "Spiral model", "correct": true},
                {"option": "Waterfall model", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is a role of the program register (i.e., program counter) of the CPU?",
            "a": [
                {"option": "In order to decode an instruction, it contains the instruction that is read out from the memory.", "correct": false},
                {"option": "In order to execute a conditional branch instruction, it contains the state of operation results.", "correct": false},
                {"option": "In order to perform an arithmetic or logical operation, it contains data that is read out from the memory.", "correct": false},
                {"option": "In order to read out an instruction, it contains the address where the next instruction is stored.", "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "When the average instruction execution time of a computer is 20 nanoseconds, what is the performance of this computer in MIPS?",
            "a": [
                {"option": "5", "correct": false},
                {"option": "10", "correct": false},
                {"option": "20", "correct": false},
                {"option": "50", "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "There is a digital video recording system installed with four security cameras. In this system, the video data from each camera is captured at 30 frames per second with a resolution of 640×480 pixels and a color depth of 16 bits per pixel, and then it is stored in the hard disk drive. Which of the following is the approximate storage capacity that is required for recording all video data for one minute? Here, 1MB is 10<sup>6</sup> bytes, and 1GB is 10<sup>9</sup> bytes.",
            "a": [
                {"option": "19 MB", "correct": false},
                {"option": "74 MB", "correct": false},
                {"option": "1.2 GB", "correct": false},
                {"option": "4.5 GB", "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Cache memory is usually organized at multiple levels, such as L1 for level 1 and L2 for level 2, with L1 having the smallest storage capacity but the fastest memory speed. The data in L1, L2, and main memory can be accessed using 1, 10, and 100 clock cycles, respectively. When the cache miss rates in L1 and L2 are 5% and 50% respectively, what is the average memory access time in clock cycles?",
            "a": [
                {"option": "2.8", "correct": false},
                {"option": "3.7", "correct": true},
                {"option": "37", "correct": false},
                {"option": "52.3", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The magnetic head of a hard disk drive is currently positioned at cylinder number 100, and the cylinder numbers 120, 90, 70, 80, 140, 110, and 60 are lined up in the I/O request queue. What is the total number of cylinders that the head moves to satisfy the conditions below?<br/><br/><p>[Conditions]</p>" +
                "<ol id='orderedlist'>" +
                "<li>The seek optimization method is applied to I/O requests, which are sorted in order of increasing cylinder number so that the head can move in the same direction to the extent possible.</li>" +
                "<li>The head is currently moving in the direction where cylinder number increases.</li>" +
                "<li>When there are no more I/O requests in the current direction, the direction of movement is reversed.</li>" +
                "<li>The results are not affected by the processing order of I/O requests.</li>" +
                "<li>New I/O requests do not occur during the process.</li>" +
                "</ol>",
            "a": [
                {"option": "80", "correct": false},
                {"option": "120", "correct": true},
                {"option": "160", "correct": false},
                {"option": "220", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The arrow diagram shown below is created for time management of a project. Which of the following is the critical path?<br/><br/><img src='img/quiz/critpath1.PNG' class='img-responsive'>",
            "a": [
                {"option": "\\(A\\rightarrow C \\rightarrow E \\rightarrow F\\)", "correct": false},
                {"option": "\\(B\\rightarrow E \\rightarrow F\\)", "correct": false},
                {"option": "\\(A\\rightarrow D \\rightarrow G\\)", "correct": true},
                {"option": "\\(B\\rightarrow E \\rightarrow G\\)", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is a chart or a diagram that is often used in quality control to rank issues or problems in descending order of frequency?",
            "a": [
                {"option": "Cause-and-effect diagram", "correct": false},
                {"option": "Control chart", "correct": false},
                {"option": "Pareto chart", "correct": true},
                {"option": "Scatter diagram", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is a service delivery process that is defined, agreed, recorded, and managed in IT service management?",
            "a": [
                {"option": "Quality management", "correct": false},
                {"option": "Risk management", "correct": false},
                {"option": "Schedule management", "correct": false},
                {"option": "Service level management", "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is an appropriate description concerning MTBF and MTTR?",
            "a": [
                {"option": "MTBF increases as the number of device types that constitute the system increases.", "correct": false},
                {"option": "MTBF increases through the preventive maintenance of a system.", "correct": true},
                {"option": "MTTR increases and MTBF decreases through the remote maintenance of a system.", "correct": false},
                {"option": "MTTR increases owing to functions such as an error log or an instruction trace.", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The diagram below shows the state transition of the tasks in a multitasking computer system. When does a task in the running state move to the ready state?<br/><br/><img src='img/quiz/statemachine1.PNG' class='img-responsive'> ",
            "a": [
                {"option": "When a process based on an I/O request is completed", "correct": false},
                {"option": "When a task is generated", "correct": false},
                {"option": "When a task with a higher priority is set to the ready state", "correct": true},
                {"option": "When an I/O request is issued", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "In memory pool management of a real time system using various sizes of memory resources, which of the following is an appropriate characteristic of the fixed-length method in comparison with the variable-length method?",
            "a": [
                {"option": "The memory efficiency is good, and the processing speed for allocation and deallocation is slow and constant.", "correct": false},
                {"option": "The memory efficiency is good, and the processing speed for allocation and deallocation is slow and variable.", "correct": false},
                {"option": "The memory efficiency is poor, and the processing speed for allocation and deallocation is fast and constant.", "correct": true},
                {"option": "The memory efficiency is poor, and the processing speed for allocation and deallocation is fast and variable.", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "When CPU processing and printing are performed for four jobs under the conditions below, how many minutes does it take to complete them from the start of the first CPU processing until the end of the last printing?<br/><br/><p>[Conditions]</p>" +
                "<ol id='orderedlist'>" +
                "<li>The multiplicity of jobs is 1 during execution.</li>" +
                "<li>The CPU processing time of each job is 20 minutes.</li>" +
                "<li>400 Mbytes of printing data are spooled for each job when the CPU processing ends. The printing function of the OS operates after spooling is completed, and printing is performed by the printer.</li>" +
                "<li>One printer is available, and the printing speed is 10 minutes per 100 Mbytes.</li>" +
                "<li>The functions of CPU processing and printing can operate in parallel, and do not affect each other.</li>" +
                "<li>The time period that is not mentioned in the conditions, such as the time required for spooling, can be ignored.</li>" +
                "</ol>",
            "a": [
                {"option": "120", "correct": false},
                {"option": "160", "correct": false},
                {"option": "180", "correct": true},
                {"option": "240", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "When the number of concurrently running programs is increased in a virtual storage system with the small and insufficient capacity of main memory, which of the following is the state in which the overhead of the system increases and the processor utilization of the applications decreases?",
            "a": [
                {"option": "Bottleneck", "correct": false},
                {"option": "Fragmentation", "correct": false},
                {"option": "Paging", "correct": false},
                {"option": "Thrashing", "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is the language processor that translates and executes a source program written in high-level language, on a line-by-line basis?",
            "a": [
                {"option": "Assembler", "correct": false},
                {"option": "Compiler", "correct": false},
                {"option": "Generator", "correct": false},
                {"option": "Interpreter", "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "For the purpose of monitoring the execution process of a program in order of time, which of the following is used as a dynamic debugging tool that records the contents of the memory and registers as well as the execution sequence of program instructions?",
            "a": [
                {"option": "Assertion checker", "correct": false},
                {"option": "Code auditor", "correct": false},
                {"option": "Inspector", "correct": false},
                {"option": "Tracer", "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is an appropriate explanation of DRAM?",
            "a": [
                {"option": "It is a memory chip on which data can be written using a specially-designed device and erased by exposure to ultraviolet light.", "correct": false},
                {"option": "It is often used as main memory, and one bit is represented depending on whether or not its capacitor is charged.", "correct": true},
                {"option": "It is used as memory to store microprograms that are written at the time of manufacturing.", "correct": false},
                {"option": "It is used as high-speed memory such as cache which is composed of flip-flops, and the manufacturing cost is high.", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The figure below shows a logic circuit representing a full adder. When 1, 0, and 1 are entered into x, y, and z respectively, which of the following is the appropriate combination of the output values of c (carry) and s (sum)?<br /><br/><img src='img/quiz/logiccircuit1.PNG' class='img-responsive'>",
            "a": [
                {"option": "c = 0; s = 0", "correct": false},
                {"option": "c = 0; s = 1", "correct": false},
                {"option": "c = 1; s = 0", "correct": true},
                {"option": "c = 1; s = 1", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is the logic gate that is equivalent to the logic circuit shown below?<br /><br/><img src='img/quiz/logiccircuit2.PNG' class='img-responsive'>",
            "a": [
                {"option": "AND", "correct": false},
                {"option": "NAND", "correct": false},
                {"option": "XNOR", "correct": false},
                {"option": "XOR", "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "When a 60-minute monaural audio signal is digitalized using a PCM format with a sampling frequency of 44.1 kHz and a quantization bit rate of 16 bits, what is the approximate data volume in Mbytes? Here, the data is not compressed.",
            "a": [
                {"option": "80", "correct": false},
                {"option": "160", "correct": false},
                {"option": "320", "correct": true},
                {"option": "640", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Among the descriptions concerning three-dimensional computer graphics, which of the following is an explanation of polygon?",
            "a": [
                {"option": "It is a basic element that is used for constituting a polyhedron taking the form of a closed solid or for approximating a quadric surface or a free-form surface.", "correct": true},
                {"option": "It is a basic element, such as a pattern or design, which is pasted on the surface of a modeled object.", "correct": false},
                {"option": "It is an image obtained by converting a model recorded inside a computer to a two-dimensional form so that it can be rendered on the screen.", "correct": false},
                {"option": "It is an image that transforms smoothly from an image a including an object A to an image b including a different object B having another shape.", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "As shown in the class diagram below, there is a many-to-many association between the two classes Product and Warehouse. When there is a need to know how many of each product are stored in each warehouse, the association class StockHolding can be added between the two classes Product and Warehouse so as not to hide the original many-to-many relationship.<br /><br/><img src='img/quiz/classdiagram1.PNG' class='img-responsive'><br />If the class diagram shown below is depicted using a full class instead of the association class, which of the following is the appropriate combination of cardinalities that are inserted into blanks A through D?<br /><br/><img src='img/quiz/classdiagram1i.PNG' class='img-responsive'>" +
                "<div class='table-responsive'><table class='table table-condensed'>" +
                "<thead><tr><th>Choice</th><th>A</th><th>B</th><th>C</th><th>D</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>a)</td><td>0..*</td><td>1</td><td>0..*</td><td>1</td></tr>" +
                "<tr><td>b)</td><td>0..*</td><td>1</td><td>1</td><td>0..*</td></tr>" +
                "<tr><td>c)</td><td>1</td><td>0..*</td><td>0..*</td><td>1</td></tr>" +
                "<tr><td>d)</td><td>1</td><td>0..*</td><td>1</td><td>0..*</td></tr>" +
                "</tbody>" +
                "</table></div>",
            "a": [
                {"option": "a)", "correct": false},
                {"option": "b)", "correct": false},
                {"option": "c)", "correct": true},
                {"option": "d)", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "As shown below, when the SQL statement is executed on the relational database table \"Staff\", which of the following tables is created?<br /><br /><pre>SELECT StaffID, BranchID FROM Staff WHERE BranchID = 'B03' " +
                "UNION " +
                "SELECT StaffID, BranchID FROM Staff WHERE Salary > 5000;</pre><br/>Staff" +
                "<div class='table-responsive'><table class='table table-condensed'>" +
                "<thead><tr><th>StaffID</th><th>Salary</th><th>BranchID</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>S01</td><td>2000</td><td>B01</td></tr>" +
                "<tr><td>S02</td><td>4000</td><td>B01</td></tr>" +
                "<tr><td>S03</td><td>3000</td><td>B03</td></tr>" +
                "<tr><td>S04</td><td>8000</td><td>B03</td></tr>" +
                "<tr><td>S05</td><td>3000</td><td>B03</td></tr>" +
                "<tr><td>S06</td><td>4000</td><td>B07</td></tr>" +
                "<tr><td>S07</td><td>6000</td><td>B08</td></tr>" +
                "</tbody>" +
                "</table></div>",
            "a": [
                {"option": "<div class='table-responsive'><table class='table'>" +
                    "<thead><tr><th>StaffID</th><th>BranchID</th></tr></thead>" +
                    "<tbody>" +
                    "<tr><th>S04</th><th>B03</th></tr>" +
                    "</tbody></table> " +
                    "</div>", "correct": false},
                {"option": "<div class='table-responsive'><table class='table'>" +
                    "<thead><tr><th>StaffID</th><th>BranchID</th></tr></thead>" +
                    "<tbody>" +
                    "<tr><th>S03</th><th>B03</th></tr>" +
                    "<tr><th>S04</th><th>B03</th></tr>" +
                    "<tr><th>S05</th><th>B03</th></tr>" +
                    "<tr><th>S07</th><th>B08</th></tr>" +
                    "</tbody></table> " +
                    "</div>", "correct": true},
                {"option": "<div class='table-responsive'><table class='table'>" +
                    "<thead><tr><th>StaffID</th><th>BranchID</th></tr></thead>" +
                    "<tbody>" +
                    "<tr><th>S03</th><th>B03</th></tr>" +
                    "<tr><th>S04</th><th>B03</th></tr>" +
                    "<tr><th>S05</th><th>B03</th></tr>" +
                    "<tr><th>S04</th><th>B03</th></tr>" +
                    "<tr><th>S07</th><th>B08</th></tr>" +
                    "</tbody></table> " +
                    "</div>", "correct": false},
                {"option": "<div class='table-responsive'><table class='table'>" +
                    "<thead><tr><th>StaffID</th><th>BranchID</th></tr></thead>" +
                    "<tbody>" +
                    "<tr><th>S03</th><th>B03</th></tr>" +
                    "<tr><th>S04</th><th>B03</th></tr>" +
                    "<tr><th>S05</th><th>B03</th></tr>" +
                    "<tr><th>S03</th><th>B08</th></tr>" +
                    "<tr><th>S04</th><th>B08</th></tr>" +
                    "<tr><th>S05</th><th>B08</th></tr>" +
                    "<tr><th>S07</th><th>B03</th></tr>" +
                    "<tr><th>S07</th><th>B08</th></tr>" +
                    "</tbody></table> " +
                    "</div>", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is the appropriate flow of execution of SQL statements?",
            "a": [
                {"option": "\\(Code\\;generation\\rightarrow Optimization \\rightarrow Decomposition \\rightarrow Execution\\)", "correct": false},
                {"option": "\\(Decomposition \\rightarrow Code\\;generation\\rightarrow Optimization \\rightarrow Execution\\)", "correct": false},
                {"option": "\\(Decomposition \\rightarrow Optimization \\rightarrow Code\\;generation\\rightarrow Execution\\)", "correct": true},
                {"option": "\\(Optimization \\rightarrow Decomposition \\rightarrow Code\\;generation\\rightarrow Execution\\)", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "In a relational database system, which of the following is an appropriate purpose of recording changes in a database file as a journal file?",
            "a": [
                {"option": "To determine whether to commit or roll back the database updates", "correct": false},
                {"option": "To enable recovery to be undertaken effectively in the event of a failure", "correct": true},
                {"option": "To move transaction log records to the database backup files", "correct": false},
                {"option": "To support concurrency control of the simultaneous execution of transactions", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is the most appropriate description concerning the exclusive control of a DBMS?",
            "a": [
                {"option": "Exclusive control is necessary for data that might be updated simultaneously by several people.", "correct": true},
                {"option": "Exclusive control is necessary for improving the processing speed of data that is frequently accessed.", "correct": false},
                {"option": "Exclusive control is necessary for preventing the occurrence of a deadlock when data is accessed.", "correct": false},
                {"option": "In order to improve the processing speed, the range of the data on which exclusive control is performed must be made as wide as possible.", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "When an optical fiber cable is used for data communication, which of the following is the approximate bandwidth (in units of THz) of the light within the range of wavelength from 1000 to 1400 nanometers? Here, in consideration of data transmission efficiency and such other factors, the effective speed of the light on the optical fiber cable can be assumed to be 2×10<sup>8</sup> m/s.",
            "a": [
                {"option": "50", "correct": false},
                {"option": "57", "correct": true},
                {"option": "75", "correct": false},
                {"option": "86", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is an appropriate description concerning interconnection devices between LANs?",
            "a": [
                {"option": "The bridge relays frames based on the IP address.", "correct": false},
                {"option": "The gateway converts the protocols of only the first through third layers of the OSI basic reference model.", "correct": false},
                {"option": "The repeater extends the transmission distance by amplifying signals between the same types of segments.", "correct": true},
                {"option": "The router relays frames based on the MAC address.", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Among the layers of the OSI basic reference model, which of the following is the appropriate layer that is primarily responsible for the translation, encryption, and compression of data?",
            "a": [
                {"option": "Data link layer", "correct": false},
                {"option": "Physical layer", "correct": false},
                {"option": "Presentation layer", "correct": true},
                {"option": "Session layer", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "In a TCP/IP network using IPv4 addresses, which of the following is an effective IP address that can be allocated to a network device?",
            "a": [
                {"option": "172.16.5.0/40", "correct": false},
                {"option": "192.168.251.256/25", "correct": false},
                {"option": "203.164.15.9/28", "correct": true},
                {"option": "252.169.15.40/30", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is an appropriate explanation of POP3 that is used in an e-mail system?",
            "a": [
                {"option": "It is a protocol used by the user to send an e-mail.", "correct": false},
                {"option": "It is a protocol used to authenticate a user based on the user ID and password after the establishment of a PPP link.", "correct": false},
                {"option": "It is a protocol used to exchange e-mail messages between mail servers.", "correct": false},
                {"option": "It is a protocol used to retrieve e-mails from the mailbox of a mail server.", "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "A PKI involves two types of key pairs: signature key pairs, in which the private key is used for signing and the public key for checking; and exchange key pairs, in which the public key is used by an application to encrypt data, and the private key is used to decrypt the encrypted data. Which of the following is the key pair(s) that may be escrowed or backed up to prevent the loss of important data even when the corresponding key or keys are forgotten?",
            "a": [
                {"option": "Both exchange key pair and signature key pair", "correct": false},
                {"option": "Either exchange key pair or signature key pair depending on conditions", "correct": false},
                {"option": "Exchange key pair", "correct": true},
                {"option": "Signature key pair", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following can be achieved by receiving an e-mail text and its hash value from the sender, and then comparing this hash value with another hash value calculated by the recipient from the e-mail text? Here, the hash value that the recipient receives from the sender is correct.",
            "a": [
                {"option": "Checking the delivery of the e-mail", "correct": false},
                {"option": "Detecting the presence or absence of falsification in the e-mail text", "correct": true},
                {"option": "Preventing spoofing", "correct": false},
                {"option": "Preventing wiretapping of the e-mail text", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is a security measure where it is effective to confirm the destination address with the sender when an e-mail is sent?",
            "a": [
                {"option": "A preventive measure against unauthorized relay of e-mail", "correct": false},
                {"option": "A preventive measure against wrong transmission of e-mail", "correct": true},
                {"option": "Anti-spam measure using OP25B", "correct": false},
                {"option": "Anti-spam measure using SPF", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is the purpose of using a WAF (Web Application Firewall)?",
            "a": [
                {"option": "To block attacks to a vulnerability arising from a Web server and an application", "correct": true},
                {"option": "To detect the intrusion of a worm in a Web server and remove the worm automatically", "correct": false},
                {"option": "To detect vulnerabilities and inconsistencies of applications in an integration test during content development for a Web server", "correct": false},
                {"option": "To find security holes of a Web server and apply OS security patches", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "As a security measure on the Internet, a type of challenge-response test called a CAPTCHA can be used to determine whether the client is a human or a computer program. Which of the following is an appropriate purpose of using such a measure?",
            "a": [
                {"option": "To protect against a relay attack", "correct": false},
                {"option": "To protect against a virus or a worm", "correct": false},
                {"option": "To protect against automated spamming", "correct": true},
                {"option": "To protect against spyware or adware", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is an appropriate description concerning a use case diagram in UML?",
            "a": [
                {"option": "It is used to describe the sequence of states that an object goes through in response to external events.", "correct": false},
                {"option": "It is used to model the functional, informational, behavioral, and organizational workflow perspectives.", "correct": false},
                {"option": "It is used to represent mutual actions by means of messages sent and received between objects.", "correct": false},
                {"option": "It is used to show what system functions are performed for which actor, from the user’s perspective.", "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "During system development, a domain model is often created as part of the business modeling activities. Among the diagrams in UML, which of the following is the diagram that contains the implementation view of the entities in the domain model?",
            "a": [
                {"option": "Class diagram", "correct": true},
                {"option": "Communication diagram", "correct": false},
                {"option": "Object diagram", "correct": false},
                {"option": "Use case diagram", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "In UML, the state machine diagram (previously called statechart diagram) is used for describing the state machine model of a target system. Which of the following is an appropriate description of the state machine diagram?",
            "a": [
                {"option": "It shows how data flows in the system through a sequence of processes.", "correct": true},
                {"option": "It shows how the system responds to internal and external events.", "correct": false},
                {"option": "It shows relationships among objects in the system at a point in time.", "correct": false},
                {"option": "It shows the flow of events from one activity to another.", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        }// no comma here// no comma here
    ]
};
