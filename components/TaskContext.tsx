import { createContext } from "react";

export const TaskContext = createContext([
    {
        id: 1,
        isAlterar: false,
        isSelected: false,
        text: "Criar Layout no Figma"
    },
    {
        id: 2,
        isAlterar: false,
        isSelected: false,
        text: "Desenvolver Front-End"
    },
    {
        id: 3,
        isAlterar: false,
        isSelected: false,
        text: "Desenvolver Back-End"
    },
    {
        id: 4,
        isAlterar: false,
        isSelected: false,
        text: "Criar API"
    },
    {
        id: 5,
        isAlterar: false,
        isSelected: false,
        text: "Publicar no Github"
    }
]);

export const TaskDispatchContext = createContext(null);