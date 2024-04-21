const input = document.querySelector('.add input');
const addTask = document.querySelector('.add button');
const tasks = document.querySelector('.tasks');
const template = document.querySelector('template');
const main = document.querySelector('main');
const card = document.querySelector('.card');
const hoverArea = document.querySelector('.hover-area');
const hoverContent = document.querySelector('.hover-content');
const dateString = document.querySelector('.date span');
const timeString = document.querySelector('.time span');
const hiddenChild = document.querySelector('.hidden-child .task-list');

document.onkeydown = (e) => {
    if (e.ctrlKey === true) {
        dateString.style.opacity = 1;
        timeString.style.opacity = 1;

        document.onkeyup = () => {
            dateString.style.opacity = 0;
            timeString.style.opacity = 0;
        }
    }
}

let interval_ID1 = setInterval(() => {
    let date = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString()

    dateString.textContent = date;
    timeString.textContent = time;
}, 1000)

card.onmouseenter = () => {
    dateString.style.opacity = 1;
    timeString.style.opacity = 1;
    hoverContent.style.cssText += 'transform: translate(-50%, -50%) rotateY(0.5turn);'
    card.onmouseleave = () => {
        timeString.style.opacity = 0;
        dateString.style.opacity = 0;
        hoverContent.style.cssText -= 'transform: translate(-50%, -50%) rotateY(0.5turn);'
    }
}

window.onload = () => {
    input.select()
}

input.onkeydown = (e) => {
    if (e.code === 'Enter' && input.value !== '') {
        hoverArea.style.display = 'none'
        hiddenChild.children[1].children[0].innerText = input.value
        hiddenChild.children[2].children[0].style.display = 'none'
        hiddenChild.children[2].setAttribute('tabindex', -1)
        tasks.append(hiddenChild.cloneNode(true))
    }

    input.onkeyup = () => {
        if (input.value === '') {
            input.style.width = '90%'
            addTask.style.cssText -= 'scale: 1; box-shadow: -0.35vw -0.7vh 2vh 0 black;'
            addTask.setAttribute('tabindex', '-1')
        }
        if (input.value !== '') {
            input.style.width = '65%'
            addTask.style.cssText += 'scale: 1; box-shadow: -0.35vw -0.7vh 2vh 0 black;'
            addTask.setAttribute('tabindex', '0')
        }
    }
}

if (input.value !== '') {
    input.onclick = () => {
        input.style.width = '65%'
        addTask.style.cssText += 'scale: 1; box-shadow: -0.35vw -0.7vh 2vh 0 black;'
        addTask.setAttribute('tabindex', '0')
    }
}

addTask.onkeydown = (e) => {
    e.preventDefault();
    if (e.code === 'Enter') {
        hoverArea.style.display = 'none'
        hiddenChild.children[1].children[0].innerText = input.value
        hiddenChild.children[2].children[0].style.display = 'none'
        hiddenChild.children[2].setAttribute('tabindex', -1)
        tasks.append(hiddenChild.cloneNode(true))
    }
}

setInterval(() => {
    let taskLists = Array.from(tasks.children)

    addTask.onclick = () => {
        hoverArea.style.display = 'none'
        tasks.append(template.content.cloneNode(true))
        card.scroll(0, card.scrollHeight)
    }



    if (tasks.children.length !== 0) {
        const originalTasks = document.querySelectorAll('.task-overlay span');

        originalTasks.forEach((originalTask) => {
            if (originalTask.textContent === 'What are your plans?') {
                addTask.onclick = () => { }
            } else {
                addTask.onclick = () => {
                    hoverArea.style.display = 'none'
                    tasks.append(template.content.cloneNode(true))
                    card.scroll(0, card.scrollHeight)
                }
            }
        })
    }

    taskLists.forEach((taskList) => {
        let checkBox = taskList.children[0];
        let checkAnimation = taskList.children[0].children[0].children[0];
        let taskOverlay = taskList.children[1]
        let task = taskList.children[1].children[0]
        let modifyTaskOverlay = taskList.children[2]
        let modifyTask = taskList.children[2].children[0];
        let countNumber = taskList.children[3].children[0];
        let countHolder = taskList.children[3]
        let timeStage = taskList.children[5]
        let timeStageHours = taskList.children[5].children[0]
        let timeStageMinutes = taskList.children[5].children[1]
        let timeStageSeconds = taskList.children[5].children[2]

        let inputCollection = taskList.children[4].children[1].children
        let timeOverlay = taskList.children[4]
        let inputs = Array.from(inputCollection)
        let leftButton = taskList.children[4].children[0]
        let rightButton = taskList.children[4].children[2]
        let input1 = inputs[0]
        let input2 = inputs[1]
        let input3 = inputs[2]

        timeStage.onclick = () => {
            if (task.textContent !== 'What are your plans?') {
                timeOverlay.style.transform = 'translate(0)'
                timeOverlay.style.opacity = 1;
                checkBox.setAttribute('tabindex', -1)
                timeStage.setAttribute('tabindex', -1)
                input1.setAttribute('tabindex', 0)
                input2.setAttribute('tabindex', 0)
                input3.setAttribute('tabindex', 0)
                leftButton.setAttribute('tabindex', 0)
                rightButton.setAttribute('tabindex', 0)
                input1.select()
            }

            input1.placeholder = new Date().getHours()
            if (new Date().getHours() === 0) {
                input1.placeholder = '00';
            }
            if (new Date().getHours() === 1) {
                input1.placeholder = '01';
            }
            if (new Date().getHours() === 2) {
                input1.placeholder = '02';
            }
            if (new Date().getHours() === 3) {
                input1.placeholder = '03';
            }
            if (new Date().getHours() === 4) {
                input1.placeholder = '04';
            }
            if (new Date().getHours() === 5) {
                input1.placeholder = '05';
            }
            if (new Date().getHours() === 6) {
                input1.placeholder = '06';
            }
            if (new Date().getHours() === 7) {
                input1.placeholder = '07';
            }
            if (new Date().getHours() === 8) {
                input1.placeholder = '08';
            }
            if (new Date().getHours() === 9) {
                input1.placeholder = '09';
            }

            input2.placeholder = new Date().getMinutes()
            if (new Date().getMinutes() === 0) {
                input2.placeholder = '00';
            }
            if (new Date().getMinutes() === 1) {
                input2.placeholder = '01';
            }
            if (new Date().getMinutes() === 2) {
                input2.placeholder = '02';
            }
            if (new Date().getMinutes() === 3) {
                input2.placeholder = '03';
            }
            if (new Date().getMinutes() === 4) {
                input2.placeholder = '04';
            }
            if (new Date().getMinutes() === 5) {
                input2.placeholder = '05';
            }
            if (new Date().getMinutes() === 6) {
                input2.placeholder = '06';
            }
            if (new Date().getMinutes() === 7) {
                input2.placeholder = '07';
            }
            if (new Date().getMinutes() === 8) {
                input2.placeholder = '08';
            }
            if (new Date().getMinutes() === 9) {
                input2.placeholder = '09';
            }

            input3.placeholder = new Date().getSeconds(59)
            if (new Date().getSeconds() === 0) {
                input3.placeholder = '00';
            }
            if (new Date().getSeconds() === 1) {
                input3.placeholder = '01';
            }
            if (new Date().getSeconds() === 2) {
                input3.placeholder = '02';
            }
            if (new Date().getSeconds() === 3) {
                input3.placeholder = '03';
            }
            if (new Date().getSeconds() === 4) {
                input3.placeholder = '04';
            }
            if (new Date().getSeconds() === 5) {
                input3.placeholder = '05';
            }
            if (new Date().getSeconds() === 6) {
                input3.placeholder = '06';
            }
            if (new Date().getSeconds() === 7) {
                input3.placeholder = '07';
            }
            if (new Date().getSeconds() === 8) {
                input3.placeholder = '08';
            }
            if (new Date().getSeconds() === 9) {
                input3.placeholder = '09';
            }
        }

        timeStage.onkeydown = (e) => {
            if (e.code === 'Enter' && task.textContent !== 'What are your plans?') {
                timeOverlay.style.transform = 'translate(0)'
                timeOverlay.style.opacity = 1;
                checkBox.setAttribute('tabindex', -1)
                timeStage.setAttribute('tabindex', -1)
                input1.setAttribute('tabindex', 0)
                input2.setAttribute('tabindex', 0)
                input3.setAttribute('tabindex', 0)
                leftButton.setAttribute('tabindex', 0)
                rightButton.setAttribute('tabindex', 0)
                input1.select()
            }

            input1.placeholder = new Date().getHours()
            if (new Date().getHours() === 0) {
                input1.placeholder = '00';
            }
            if (new Date().getHours() === 1) {
                input1.placeholder = '01';
            }
            if (new Date().getHours() === 2) {
                input1.placeholder = '02';
            }
            if (new Date().getHours() === 3) {
                input1.placeholder = '03';
            }
            if (new Date().getHours() === 4) {
                input1.placeholder = '04';
            }
            if (new Date().getHours() === 5) {
                input1.placeholder = '05';
            }
            if (new Date().getHours() === 6) {
                input1.placeholder = '06';
            }
            if (new Date().getHours() === 7) {
                input1.placeholder = '07';
            }
            if (new Date().getHours() === 8) {
                input1.placeholder = '08';
            }
            if (new Date().getHours() === 9) {
                input1.placeholder = '09';
            }

            input2.placeholder = new Date().getMinutes()
            if (new Date().getMinutes() === 0) {
                input2.placeholder = '00';
            }
            if (new Date().getMinutes() === 1) {
                input2.placeholder = '01';
            }
            if (new Date().getMinutes() === 2) {
                input2.placeholder = '02';
            }
            if (new Date().getMinutes() === 3) {
                input2.placeholder = '03';
            }
            if (new Date().getMinutes() === 4) {
                input2.placeholder = '04';
            }
            if (new Date().getMinutes() === 5) {
                input2.placeholder = '05';
            }
            if (new Date().getMinutes() === 6) {
                input2.placeholder = '06';
            }
            if (new Date().getMinutes() === 7) {
                input2.placeholder = '07';
            }
            if (new Date().getMinutes() === 8) {
                input2.placeholder = '08';
            }
            if (new Date().getMinutes() === 9) {
                input2.placeholder = '09';
            }

            input3.placeholder = new Date().getSeconds(59)
            if (new Date().getSeconds() === 0) {
                input3.placeholder = '00';
            }
            if (new Date().getSeconds() === 1) {
                input3.placeholder = '01';
            }
            if (new Date().getSeconds() === 2) {
                input3.placeholder = '02';
            }
            if (new Date().getSeconds() === 3) {
                input3.placeholder = '03';
            }
            if (new Date().getSeconds() === 4) {
                input3.placeholder = '04';
            }
            if (new Date().getSeconds() === 5) {
                input3.placeholder = '05';
            }
            if (new Date().getSeconds() === 6) {
                input3.placeholder = '06';
            }
            if (new Date().getSeconds() === 7) {
                input3.placeholder = '07';
            }
            if (new Date().getSeconds() === 8) {
                input3.placeholder = '08';
            }
            if (new Date().getSeconds() === 9) {
                input3.placeholder = '09';
            }
        }

        rightButton.onclick = () => {
            rightButton.setAttribute('clicked', true)
            leftButton.setAttribute('clicked', false)
            timeOverlay.style.transform = 'translate(-120%)'
            timeOverlay.style.opacity = 0;
            checkBox.setAttribute('tabindex', 0)
            timeStage.setAttribute('tabindex', 0)
            input1.setAttribute('tabindex', -1)
            input2.setAttribute('tabindex', -1)
            input3.setAttribute('tabindex', -1)
            leftButton.setAttribute('tabindex', -1)
            rightButton.setAttribute('tabindex', -1)
            input.select()
        }

        rightButton.onkeydown = (e) => {
            if (e.code === 'Enter') {
                e.preventDefault()
                rightButton.setAttribute('clicked', true)
                leftButton.setAttribute('clicked', false)
                timeOverlay.style.transform = 'translate(-120%)'
                timeOverlay.style.opacity = 0;
                checkBox.setAttribute('tabindex', 0)
                timeStage.setAttribute('tabindex', 0)
                input1.setAttribute('tabindex', -1)
                input2.setAttribute('tabindex', -1)
                input3.setAttribute('tabindex', -1)
                leftButton.setAttribute('tabindex', -1)
                rightButton.setAttribute('tabindex', -1)
            }
        }

        leftButton.onclick = () => {
            leftButton.setAttribute('clicked', true)
            rightButton.setAttribute('clicked', false)
            if (input1.value !== '' && input2.value !== '' && input3.value !== '') {
                timeStageHours.textContent = input1.value
                timeStageMinutes.textContent = input2.value
                timeStageSeconds.textContent = input3.value
                setTimeout(() => {
                    timeStage.style.color = 'bisque'
                    timeStage.style.backgroundColor = 'red'
                }, 250)


                let interval_ID3 = setInterval(() => {
                    if (new Date().toLocaleTimeString() === timeStage.innerText) {
                        checkAnimation.style.scale = 1;
                        checkBox.setAttribute('clicked', true);
                        task.style.cssText += 'text-decoration: line-through;'
                        countNumber.style.opacity = '1 !important';

                        setTimeout(() => {
                            taskList.style.cssText += "animation: slide-away 500ms forwards;";
                        }, 3000)

                        taskList.onanimationend = () => {
                            taskList.style.display = 'none'
                            tasks.removeChild(taskList)
                            task.textContent = '';
                            if (card.clientHeight <= 430) {
                                card.style.maxHeight = 'fit-content'
                            }

                            if (tasks.children.length === 0) {
                                hoverArea.style.opacity = '0'
                                hoverArea.style.display = 'block'
                                setTimeout(() => {
                                    hoverArea.style.opacity = '1'
                                }, 100)
                            }
                        }
                    }

                    if (rightButton.getAttribute('clicked') === 'true') {
                        clearInterval(interval_ID3)
                        setTimeout(() => {
                            timeStage.style.color = 'skyblue'
                            timeStage.style.backgroundColor = 'black'
                        }, 250)
                    }
                }, 1000)
            }

            timeOverlay.style.transform = 'translate(-120%)'
            timeOverlay.style.opacity = 0;
            checkBox.setAttribute('tabindex', 0)
            timeStage.setAttribute('tabindex', 0)
            input1.setAttribute('tabindex', -1)
            input2.setAttribute('tabindex', -1)
            input3.setAttribute('tabindex', -1)
            leftButton.setAttribute('tabindex', -1)
            rightButton.setAttribute('tabindex', -1)
            input.select()
        }

        leftButton.onkeydown = (e) => {
            leftButton.setAttribute('clicked', true)
            rightButton.setAttribute('clicked', false)
            if (e.code === 'Enter') {
                if (input1.value !== '' && input2.value !== '' && input3.value !== '') {
                    setTimeout(() => {
                        timeStage.style.color = 'bisque'
                        timeStage.style.backgroundColor = 'red'
                    }, 250)
                    e.preventDefault()
                    timeStageHours.textContent = input1.value
                    timeStageMinutes.textContent = input2.value
                    timeStageSeconds.textContent = input3.value


                    let interval_ID4 = setInterval(() => {
                        if (new Date().toLocaleTimeString() === timeStage.innerText) {
                            checkAnimation.style.scale = 1;
                            checkBox.setAttribute('clicked', true);
                            task.style.cssText += 'text-decoration: line-through;'
                            countNumber.style.opacity = '1 !important';

                            setTimeout(() => {
                                taskList.style.cssText += "animation: slide-away 500ms forwards;";
                            }, 3000)

                            taskList.onanimationend = () => {
                                taskList.style.display = 'none'
                                tasks.removeChild(taskList)
                                task.textContent = '';
                                if (card.clientHeight <= 430) {
                                    card.style.maxHeight = 'fit-content'
                                }

                                if (tasks.children.length === 0) {
                                    hoverArea.style.opacity = '0'
                                    hoverArea.style.display = 'block'
                                    setTimeout(() => {
                                        hoverArea.style.opacity = '1'
                                    }, 100)
                                }
                            }
                        }

                        if (rightButton.getAttribute('clicked') === 'true') {
                            clearInterval(interval_ID4)
                            setTimeout(() => {
                                timeStage.style.color = 'skyblue'
                                timeStage.style.backgroundColor = 'black'
                            }, 250)
                        }
                    }, 1000)
                }

                timeOverlay.style.transform = 'translate(-120%)'
                timeOverlay.style.opacity = 0;
                checkBox.setAttribute('tabindex', 0)
                timeStage.setAttribute('tabindex', 0)
                input1.setAttribute('tabindex', -1)
                input2.setAttribute('tabindex', -1)
                input3.setAttribute('tabindex', -1)
                leftButton.setAttribute('tabindex', -1)
                rightButton.setAttribute('tabindex', -1)
            }
        }

        inputs.forEach(timeInput => {
            timeInput.onkeydown = (e) => {
                leftButton.setAttribute('clicked', false)
                rightButton.setAttribute('clicked', false)
                if (e.code === 'Enter') {
                    if (input1.value !== '' && input2.value !== '' && input3.value !== '') {
                        setTimeout(() => {
                            timeStage.style.color = 'bisque'
                            timeStage.style.backgroundColor = 'red'
                        }, 250)
                        e.preventDefault()
                        timeStageHours.textContent = input1.value
                        timeStageMinutes.textContent = input2.value
                        timeStageSeconds.textContent = input3.value


                        setInterval(() => {
                            if (new Date().toLocaleTimeString() === timeStage.innerText) {
                                checkAnimation.style.scale = 1;
                                checkBox.setAttribute('clicked', true);
                                task.style.cssText += 'text-decoration: line-through;'
                                countNumber.style.opacity = '1 !important';

                                setTimeout(() => {
                                    taskList.style.cssText += "animation: slide-away 500ms forwards;";
                                }, 3000)

                                taskList.onanimationend = () => {
                                    taskList.style.display = 'none'
                                    tasks.removeChild(taskList)
                                    task.textContent = '';
                                    if (card.clientHeight <= 430) {
                                        card.style.maxHeight = 'fit-content'
                                    }

                                    if (tasks.children.length === 0) {
                                        hoverArea.style.opacity = '0'
                                        hoverArea.style.display = 'block'
                                        setTimeout(() => {
                                            hoverArea.style.opacity = '1'
                                        }, 100)
                                    }
                                }
                            }
                        }, 1000)
                    }

                    timeOverlay.style.transform = 'translate(-120%)'
                    timeOverlay.style.opacity = 0;
                    checkBox.setAttribute('tabindex', 0)
                    timeStage.setAttribute('tabindex', 0)
                    input1.setAttribute('tabindex', -1)
                    input2.setAttribute('tabindex', -1)
                    input3.setAttribute('tabindex', -1)
                    leftButton.setAttribute('tabindex', -1)
                    rightButton.setAttribute('tabindex', -1)
                }

                if (e.code.includes('Key', 0) !== true) {
                    return
                }
                e.preventDefault();
            }

            input1.onkeyup = () => {
                if (input1.value > 23) {
                    input1.value = 23;
                }
            }
            input2.onkeyup = () => {
                if (input2.value > 59) {
                    input2.value = 59;
                }
            }
            input3.onkeyup = () => {
                if (input3.value > 59) {
                    input3.value = 59;
                }
            }
        })

        input.onkeydown = (e) => {
            if (task.textContent === 'What are your plans?') {
                return
            }
            if (e.ctrlKey === true && e.code === 'Backquote') {
                tasks.innerHTML = '';
            }

            if (e.code === 'Enter' && input.value !== '') {
                hoverArea.style.display = 'none'
                hiddenChild.children[1].children[0].innerText = input.value
                hiddenChild.children[2].children[0].style.display = 'none'
                hiddenChild.children[2].setAttribute('tabindex', -1)
                tasks.append(hiddenChild.cloneNode(true))
                card.scroll(0, card.scrollHeight)
                if (card.clientHeight >= 430) {
                    card.style.maxHeight = '450px'
                }
            }
        }

        input.onkeyup = (e) => {
            if (input.value === '') {
                input.style.width = '90%'
                addTask.style.cssText -= 'scale: 1; box-shadow: -0.35vw -0.7vh 2vh 0 black;'
                addTask.setAttribute('tabindex', '-1')
            }

            if (input.value !== '') {
                input.style.width = '65%'
                addTask.style.cssText += 'scale: 1; box-shadow: -0.35vw -0.7vh 2vh 0 black;'
                addTask.setAttribute('tabindex', '0')
            }

            if (e.code === 'Enter' && input.value !== '') {
                input.select()
                timeStage.style.cssText += 'opacity: 1; pointer-events: all;'
                taskList.style.cssText += 'animation: background-slide 5s forwards infinite alternate ease-in-out;';
                if (task.textContent.at(23) !== undefined) {
                    taskOverlay.title = task.textContent
                }

                timeStageHours.innerHTML = new Date().getHours()
                if (new Date().getHours() === 0) {
                    timeStageHours.innerHTML = '00';
                }
                if (new Date().getHours() === 1) {
                    timeStageHours.innerHTML = '01';
                }
                if (new Date().getHours() === 2) {
                    timeStageHours.innerHTML = '02';
                }
                if (new Date().getHours() === 3) {
                    timeStageHours.innerHTML = '03';
                }
                if (new Date().getHours() === 4) {
                    timeStageHours.innerHTML = '04';
                }
                if (new Date().getHours() === 5) {
                    timeStageHours.innerHTML = '05';
                }
                if (new Date().getHours() === 6) {
                    timeStageHours.innerHTML = '06';
                }
                if (new Date().getHours() === 7) {
                    timeStageHours.innerHTML = '07';
                }
                if (new Date().getHours() === 8) {
                    timeStageHours.innerHTML = '08';
                }
                if (new Date().getHours() === 9) {
                    timeStageHours.innerHTML = '09';
                }

                timeStageMinutes.innerHTML = new Date().getMinutes()
                if (new Date().getMinutes() === 0) {
                    timeStageMinutes.innerHTML = '00';
                }
                if (new Date().getMinutes() === 1) {
                    timeStageMinutes.innerHTML = '01';
                }
                if (new Date().getMinutes() === 2) {
                    timeStageMinutes.innerHTML = '02';
                }
                if (new Date().getMinutes() === 3) {
                    timeStageMinutes.innerHTML = '03';
                }
                if (new Date().getMinutes() === 4) {
                    timeStageMinutes.innerHTML = '04';
                }
                if (new Date().getMinutes() === 5) {
                    timeStageMinutes.innerHTML = '05';
                }
                if (new Date().getMinutes() === 6) {
                    timeStageMinutes.innerHTML = '06';
                }
                if (new Date().getMinutes() === 7) {
                    timeStageMinutes.innerHTML = '07';
                }
                if (new Date().getMinutes() === 8) {
                    timeStageMinutes.innerHTML = '08';
                }
                if (new Date().getMinutes() === 9) {
                    timeStageMinutes.innerHTML = '09';
                }

                timeStageSeconds.innerHTML = new Date().getSeconds(59)
                if (new Date().getSeconds() === 0) {
                    timeStageSeconds.innerHTML = '00';
                }
                if (new Date().getSeconds() === 1) {
                    timeStageSeconds.innerHTML = '01';
                }
                if (new Date().getSeconds() === 2) {
                    timeStageSeconds.innerHTML = '02';
                }
                if (new Date().getSeconds() === 3) {
                    timeStageSeconds.innerHTML = '03';
                }
                if (new Date().getSeconds() === 4) {
                    timeStageSeconds.innerHTML = '04';
                }
                if (new Date().getSeconds() === 5) {
                    timeStageSeconds.innerHTML = '05';
                }
                if (new Date().getSeconds() === 6) {
                    timeStageSeconds.innerHTML = '06';
                }
                if (new Date().getSeconds() === 7) {
                    timeStageSeconds.innerHTML = '07';
                }
                if (new Date().getSeconds() === 8) {
                    timeStageSeconds.innerHTML = '08';
                }
                if (new Date().getSeconds() === 9) {
                    timeStageSeconds.innerHTML = '09';
                }
            }
        }

        addTask.onkeydown = (e) => {
            e.preventDefault();
            if (e.code === 'Enter' && task.textContent !== 'What are your plans?') {
                hoverArea.style.display = 'none'
                hiddenChild.children[1].children[0].innerText = input.value
                hiddenChild.children[2].children[0].style.display = 'none'
                hiddenChild.children[2].setAttribute('tabindex', -1)
                tasks.append(hiddenChild.cloneNode(true))
                card.scroll(0, card.scrollHeight)
                if (card.clientHeight >= 430) {
                    card.style.maxHeight = '450px'
                }
            }
        }

        addTask.onkeyup = (e) => {
            if (e.code === 'Enter' && input.value !== '') {
                input.select()
                timeStage.style.cssText += 'opacity: 1; pointer-events: all;'
                taskList.style.cssText += 'animation: background-slide 5s forwards infinite alternate ease-in-out;';
                if (task.textContent.at(23) !== undefined) {
                    taskOverlay.title = task.textContent
                }

                timeStageHours.innerHTML = new Date().getHours()
                if (new Date().getHours() === 0) {
                    timeStageHours.innerHTML = '00';
                }
                if (new Date().getHours() === 1) {
                    timeStageHours.innerHTML = '01';
                }
                if (new Date().getHours() === 2) {
                    timeStageHours.innerHTML = '02';
                }
                if (new Date().getHours() === 3) {
                    timeStageHours.innerHTML = '03';
                }
                if (new Date().getHours() === 4) {
                    timeStageHours.innerHTML = '04';
                }
                if (new Date().getHours() === 5) {
                    timeStageHours.innerHTML = '05';
                }
                if (new Date().getHours() === 6) {
                    timeStageHours.innerHTML = '06';
                }
                if (new Date().getHours() === 7) {
                    timeStageHours.innerHTML = '07';
                }
                if (new Date().getHours() === 8) {
                    timeStageHours.innerHTML = '08';
                }
                if (new Date().getHours() === 9) {
                    timeStageHours.innerHTML = '09';
                }

                timeStageMinutes.innerHTML = new Date().getMinutes()
                if (new Date().getMinutes() === 0) {
                    timeStageMinutes.innerHTML = '00';
                }
                if (new Date().getMinutes() === 1) {
                    timeStageMinutes.innerHTML = '01';
                }
                if (new Date().getMinutes() === 2) {
                    timeStageMinutes.innerHTML = '02';
                }
                if (new Date().getMinutes() === 3) {
                    timeStageMinutes.innerHTML = '03';
                }
                if (new Date().getMinutes() === 4) {
                    timeStageMinutes.innerHTML = '04';
                }
                if (new Date().getMinutes() === 5) {
                    timeStageMinutes.innerHTML = '05';
                }
                if (new Date().getMinutes() === 6) {
                    timeStageMinutes.innerHTML = '06';
                }
                if (new Date().getMinutes() === 7) {
                    timeStageMinutes.innerHTML = '07';
                }
                if (new Date().getMinutes() === 8) {
                    timeStageMinutes.innerHTML = '08';
                }
                if (new Date().getMinutes() === 9) {
                    timeStageMinutes.innerHTML = '09';
                }

                timeStageSeconds.innerHTML = new Date().getSeconds(59)
                if (new Date().getSeconds() === 0) {
                    timeStageSeconds.innerHTML = '00';
                }
                if (new Date().getSeconds() === 1) {
                    timeStageSeconds.innerHTML = '01';
                }
                if (new Date().getSeconds() === 2) {
                    timeStageSeconds.innerHTML = '02';
                }
                if (new Date().getSeconds() === 3) {
                    timeStageSeconds.innerHTML = '03';
                }
                if (new Date().getSeconds() === 4) {
                    timeStageSeconds.innerHTML = '04';
                }
                if (new Date().getSeconds() === 5) {
                    timeStageSeconds.innerHTML = '05';
                }
                if (new Date().getSeconds() === 6) {
                    timeStageSeconds.innerHTML = '06';
                }
                if (new Date().getSeconds() === 7) {
                    timeStageSeconds.innerHTML = '07';
                }
                if (new Date().getSeconds() === 8) {
                    timeStageSeconds.innerHTML = '08';
                }
                if (new Date().getSeconds() === 9) {
                    timeStageSeconds.innerHTML = '09';
                }
            }
        }

        modifyTask.onclick = () => {
            if (input.value === '') {
                return
            }
            timeStage.style.cssText += 'opacity: 1; pointer-events: all;'
            task.textContent = input.value
            // modifyTask.style.scale = 'none'
            modifyTaskOverlay.style.scale = 0
            modifyTaskOverlay.setAttribute('tabindex', -1)

            input.select()
            taskList.style.cssText += 'animation: background-slide 5s forwards infinite alternate ease-in-out;';
            if (task.textContent.at(23) !== undefined) {
                taskOverlay.title = task.textContent
            }

            timeStageHours.innerHTML = new Date().getHours()
            if (new Date().getHours() === 0) {
                timeStageHours.innerHTML = '00';
            }
            if (new Date().getHours() === 1) {
                timeStageHours.innerHTML = '01';
            }
            if (new Date().getHours() === 2) {
                timeStageHours.innerHTML = '02';
            }
            if (new Date().getHours() === 3) {
                timeStageHours.innerHTML = '03';
            }
            if (new Date().getHours() === 4) {
                timeStageHours.innerHTML = '04';
            }
            if (new Date().getHours() === 5) {
                timeStageHours.innerHTML = '05';
            }
            if (new Date().getHours() === 6) {
                timeStageHours.innerHTML = '06';
            }
            if (new Date().getHours() === 7) {
                timeStageHours.innerHTML = '07';
            }
            if (new Date().getHours() === 8) {
                timeStageHours.innerHTML = '08';
            }
            if (new Date().getHours() === 9) {
                timeStageHours.innerHTML = '09';
            }

            timeStageMinutes.innerHTML = new Date().getMinutes()
            if (new Date().getMinutes() === 0) {
                timeStageMinutes.innerHTML = '00';
            }
            if (new Date().getMinutes() === 1) {
                timeStageMinutes.innerHTML = '01';
            }
            if (new Date().getMinutes() === 2) {
                timeStageMinutes.innerHTML = '02';
            }
            if (new Date().getMinutes() === 3) {
                timeStageMinutes.innerHTML = '03';
            }
            if (new Date().getMinutes() === 4) {
                timeStageMinutes.innerHTML = '04';
            }
            if (new Date().getMinutes() === 5) {
                timeStageMinutes.innerHTML = '05';
            }
            if (new Date().getMinutes() === 6) {
                timeStageMinutes.innerHTML = '06';
            }
            if (new Date().getMinutes() === 7) {
                timeStageMinutes.innerHTML = '07';
            }
            if (new Date().getMinutes() === 8) {
                timeStageMinutes.innerHTML = '08';
            }
            if (new Date().getMinutes() === 9) {
                timeStageMinutes.innerHTML = '09';
            }

            timeStageSeconds.innerHTML = new Date().getSeconds(59)
            if (new Date().getSeconds() === 0) {
                timeStageSeconds.innerHTML = '00';
            }
            if (new Date().getSeconds() === 1) {
                timeStageSeconds.innerHTML = '01';
            }
            if (new Date().getSeconds() === 2) {
                timeStageSeconds.innerHTML = '02';
            }
            if (new Date().getSeconds() === 3) {
                timeStageSeconds.innerHTML = '03';
            }
            if (new Date().getSeconds() === 4) {
                timeStageSeconds.innerHTML = '04';
            }
            if (new Date().getSeconds() === 5) {
                timeStageSeconds.innerHTML = '05';
            }
            if (new Date().getSeconds() === 6) {
                timeStageSeconds.innerHTML = '06';
            }
            if (new Date().getSeconds() === 7) {
                timeStageSeconds.innerHTML = '07';
            }
            if (new Date().getSeconds() === 8) {
                timeStageSeconds.innerHTML = '08';
            }
            if (new Date().getSeconds() === 9) {
                timeStageSeconds.innerHTML = '09';
            }
        }

        if (task.textContent === 'What are your plans?') {
            return
        }

        let count = 0;

        checkBox.onclick = () => {
            checkAnimation.style.scale = 1;
            checkBox.setAttribute('clicked', true);
            task.style.cssText += 'text-decoration: line-through;'

            taskList.onmouseleave = () => {
                let timeOut_ID = setTimeout(() => {
                    taskList.style.cssText += "animation: slide-away 500ms forwards;";
                }, 3000)

                let interval_ID2 = setInterval(() => {
                    count += 1;
                    countNumber.innerHTML = count
                }, 1000)

                setInterval(() => {
                    if (count >= 3) {
                        clearInterval(interval_ID2)
                    }
                }, 1000)

                countHolder.style.cssText += 'opacity: 1; animation: scale-out 500ms forwards infinite alternate;'

                taskList.onmouseenter = () => {
                    clearTimeout(timeOut_ID)
                    clearInterval(interval_ID2)

                    countNumber.innerHTML = 0
                    count = 0
                }

                taskList.onanimationend = () => {
                    taskList.style.display = 'none'
                    tasks.removeChild(taskList)
                    task.textContent = '';
                    if (card.clientHeight <= 430) {
                        card.style.maxHeight = 'fit-content'
                    }
                    if (tasks.children.length === 0) {
                        hoverArea.style.opacity = '0'
                        hoverArea.style.display = 'block'
                        setTimeout(() => {
                            hoverArea.style.opacity = '1'
                        }, 100)
                    }
                }
            }
        }

        setInterval(() => {
            if (checkBox.getAttribute('clicked') === 'false') {
                taskList.onmouseleave = () => { }
            }
        }, 100)

        checkBox.onkeydown = (e) => {
            if (e.code === 'Enter') {
                checkAnimation.style.scale = 1;
                checkBox.setAttribute('clicked', true);
                task.style.cssText += 'text-decoration: line-through;'

                setTimeout(() => {
                    taskList.style.cssText += "animation: slide-away 500ms forwards;";
                }, 3000)

                let interval_ID2 = setInterval(() => {
                    count += 1;
                    countNumber.innerHTML = count
                }, 1000)

                setInterval(() => {
                    if (count >= 3) {
                        clearInterval(interval_ID2)
                    }
                }, 1000)

                countHolder.style.cssText += 'opacity: 1; animation: scale-out 500ms forwards infinite alternate;'

                taskList.onanimationend = () => {
                    taskList.style.display = 'none'
                    tasks.removeChild(taskList)
                    task.textContent = '';
                    if (card.clientHeight <= 430) {
                        card.style.maxHeight = 'fit-content'
                    }
                    if (tasks.children.length === 0) {
                        hoverArea.style.opacity = '0'
                        hoverArea.style.display = 'block'
                        setTimeout(() => {
                            hoverArea.style.opacity = '1'
                        }, 100)
                    }
                }
            }
        }

        checkBox.ondblclick = () => {
            checkAnimation.style.scale = 0;
            checkBox.setAttribute('clicked', false);
            task.style.cssText -= 'text-decoration: line-through;'
            countHolder.style.cssText -= 'opacity: 1; animation: scale-out 500ms forwards infinite alternate;'
        }

    })
}, 100)
