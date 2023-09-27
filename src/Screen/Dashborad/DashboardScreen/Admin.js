import Input from "../../../Component/Input";
import React, { useEffect, useState } from "react";
import SmButton from "../../../Component/SmButton";
import {
  FbDataSend,
  GetData,
} from "../../../Config/FirebaseConfig/FirebaseMthod";
import { Button } from "@mui/material";

function Admin() {
  const [model, setModel] = useState({});
  const [alldata, setAlldata] = useState({});
  const [option, setOption] = useState({});
  const [data, setData] = useState([]);
  const [corect, setCorect] = useState([]);

  const sendDatamodel = () => {
    FbDataSend(option, "option")
      .then((res) => {
        // console.log("data", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const ReseavedData = () => {
    GetData("option")
      .then((res) => {
        console.log(res);
        const arr = [];
        Object.keys(res).map((key) => {
          arr.push(res[key]);
        });
        console.log("Keys", Object.keys(res));
        setData(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const saveQuizAndRender = () => {
    // console.log("mainData", model);
    console.log('data',alldata)

  };
  useEffect(() => {
    ReseavedData();
  }, []);
  console.log("CorectQuestion", corect);
  return (
    <>
      <div className="container p-5 m-3">
        <div className="row">
          <div className="col-md-12 p-3">
            <Input
              label="Enter YOur Question"
              onchnage={(e) => {
                setAlldata({ ...alldata, QuestionName: e.target.value });
              }}
            />
          </div>
          <div className="col-md-10 p-3">
            <Input
              label="Enter YOur Option"
              onchnage={(e) => {
                setOption({ ...option, Option: e.target.value });
                setAlldata({ alldata: { option: e.target.value } });
              }}
            />
          </div>
          <div className="col-md-2 p-3  ">
            <SmButton label="Addoption" onClick={sendDatamodel} />
          </div>
          <div className="col-md-6">
            <h1 className="text-center">Option</h1>
            {data.map((e, i) => {
              return (
                <div key={i} className="m-3">
                  <SmButton
                    label={e.Option}
                    onClick={() => {
                      console.log(e.Option);
                      setCorect([{ corectQuestion: e.Option }]);
                      setAlldata({ CorreactAnswer: e.Option });
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="col-md-6">
            <h1 className="text-center">CorectQuestion</h1>
            {corect.map((e, i) => {
              return (
                <div className="m-3">
                  <SmButton
                    label={
                      e.corectQuestion ? e.corectQuestion : "Correact Question"
                    }
                  />
                </div>
              );
            })}
          </div>
          <div className="col-md-12 text-center">
            <Button
              sx={{
                width: 1000,
              }}
              className="p-3"
              onClick={saveQuizAndRender}
              variant="contained"
              color="success"
            >
              Save Quiz
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
