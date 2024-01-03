import React, {useState, useEffect} from "react";
import {TaskButton} from "../../Atoms/AddTaskButton";
import {Task} from "../../Molecules/Task";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

export const TodoCard = () => {
    //Contextを取得
    const AlertHandlerContext = useAlertHandlerContext();

    const [taskList,setTaskList] = useState([]);


    const onAddTaskButtonClick = () => {
        //Spread構文: [...array]で配列を展開 ＝＞ taskList末尾にオブジェクトを追加
        setTaskList([...taskList, {name:"", initializing: true}]);
    }

    const onTaskComplete = (taskIndex) => {
        const filteredTaskList = taskList.filter((task, index) => (index != taskIndex));
        setTaskList(filteredTaskList);
    }

    const onTaskNameChange = (value, taskIndex) => {
        if(value === ""){
            const editedTaskList = taskList.filter((task, index) => {
                return index !== taskIndex;
            });
            //Alertの表示
            AlertHandlerContext.setAlert("タスクの名前が設定されていません。");
            //taskIndexにあるtaskを除外した配列をsetTaskListに格納
            setTaskList(editedTaskList);
        }else{
            const editedTaskList = taskList.map((task, index) => {
                if(index === taskIndex){
                    task.name = value;
                    task.initializing = false;
                }
                return task;
            });
            //taskIndexにあるtaskのnameとinitializingのみを変更した配列をsetTaskListに格納
            setTaskList(editedTaskList);
        }
    }

    //初期化時にLocalStorageのタスクを取り出す
    useEffect(() => {
        const data = localStorage.getItem("storage");
        if(data !== null){
            //JSON.parseでJSONからオブジェクトに変換
            const parsedTaskList = JSON.parse(data);
            setTaskList(parsedTaskList);
        }
    }, [])

    //taskListが更新されたときだけuseEffectを実行
    useEffect(() => {
        //JSON.stringifyでオブジェクトからJSON(文字列)に変換
        const stringifiedTaskList = JSON.stringify(taskList);
        localStorage.setItem("storage", stringifiedTaskList);
    }, [taskList])

    
    return (
        <StyledWrapper>
            <TaskButton onClick={onAddTaskButtonClick}/>
            <StyledTaskList>
                {taskList.map((task, index) => (
                    <StyledItem>
                        <Task
                          key={index}
                          onTaskComplete={() => onTaskComplete(index)} 
                          onTaskNameChange={(value) => onTaskNameChange(value, index)}
                          taskName = {task.name}
                          defaultIsEditing = {task.initializing}
                        />  
                    </StyledItem>
                ))}
            </StyledTaskList> 
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    padding: 20px;
    border-radius: 4px;
    background-color: ${COLOR.LIGHT_BLACK};
`;

const StyledTaskList = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

const StyledItem = styled.div`
    margin-top: 10px;
`;


