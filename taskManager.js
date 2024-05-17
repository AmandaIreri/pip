//task Manager

class TaskManager{
    constructor(){
        this.tasks = []
    }
    addTask(name,priority,deadline){
        let newId = this.tasks.length +1
        const task = {id:newId, name:name, priority:priority, deadline:new Date(deadline)};
        this.tasks.push(task);
    }

    editTask(id,update={}){
        const taskUpdate = this.tasks.find(task => task.id===id);
        console.log(taskUpdate)
        if(taskUpdate){
            Object.entries(update).forEach(([key,value]) =>{
                taskUpdate[key] = value;
            });
        }else{
            console.log('Invalid Task ID')
        }
    }
}

const tasks = new TaskManager();

console.log(tasks)
tasks.addTask("Problem Solving",2,"2024-05-26");
console.log(tasks)
tasks.addTask("Attend meeting",1,"2024-05-20");
console.log(tasks)
tasks.editTask(2,{name:"Attend Mentorship Meeting"})
console.log(tasks)

// Ankara

class Ankara {
    constructor() {
        // Initialize the Ankara with a default color
        this.color = 'white'; // Assuming white as the initial color
    }

    setColorBasedOnMood(moodState) {
        const moodColors = {
            'happy': 'blue',
            'sad': 'gray',
            'angry': 'red',
            'calm': 'green'
            // Add more moods and colors as needed
        };

        if (moodState in moodColors) {
            this.color = moodColors[moodState];
        } else {
            console.error('Invalid mood state:', moodState);
        }
    }
}

// Usage example
const myAnkara = new Ankara();
myAnkara.setColorBasedOnMood('happy');
console.log(`The color of the Ankara is now ${myAnkara.color}`);
