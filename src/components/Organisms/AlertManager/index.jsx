import React, {useEffect} from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import { Alert } from "../../Atoms/Alert";

export const AlertManager = () => {
    //Contextを取得
    const AlertHandlerContext = useAlertHandlerContext();

    //AlertHandlerContextから直接値が取り出せる
    console.log(AlertHandlerContext.visible);

    //第2引数の依存配列が変更された時だけ実行
    useEffect(() => {
        if(AlertHandlerContext.visible === true){
            setTimeout(() => {
                AlertHandlerContext.setAlert("message");//Alertの表示
            },5000);
        }
    },[AlertHandlerContext])

    return (
        <Alert
          isActive={AlertHandlerContext.visible}
        />
    )
}



