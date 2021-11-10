import React, { useEffect, useState } from "react";
import axios from "axios";

const DictionaryApp = () => {
  const [word, setWord] = useState({
    syno: [],
  });

  const Api = async () => {
    const response = await axios.get(
      "https://api.dictionaryapi.dev/api/v2/entries/en_US/hero"
    );
    console.log(response.data[0].meanings[0].definitions[0].synonyms);
    setWord({
      syno: response.data[0].meanings[0].definitions[0].synonyms,
    });
  };

  useEffect(() => {
    Api();
  }, []);

  return (
    <>
      <div>
        <p>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
            Toggle width collapse
          </button>
        </p>
        <div>
          <div
            className="collapse collapse-horizontal"
            id="collapseWidthExample"
          >
            <div className="card card-body">
              {word.syno.map((item) => (
                <li>{item}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          <a
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Link with href
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            {word.syno.map((item) => (
              <li>{item}</li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DictionaryApp;
