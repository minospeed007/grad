import axios from 'axios';
import { useState } from 'react';
import './App.css';

const Home = () => {
  const [sendData, setSendData] = useState('');
  const [success, setSuccess] = useState('');

  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState(null); 

  const handleSubmit = async () => {
    try {
      const res = await axios.post('https://safemail-server.onrender.com:10000/api/predict', { email: text });
      setPrediction(res?.data); 
      setSendData(res?.data);
      setText('');

    } catch (error) {
      console.error("Error in prediction:", error);
    }
  };
  
  const handleFeedback = async (isCorrect) => {
   setSuccess(true)
  };

  return (
    <div className="App">
      <div className='textarea-div'>
        <div className='text-btn-div'>
        <textarea 
          placeholder='Type Some Text'
          className='text-area' 
          onChange={(e) => setText(e.target.value)} 
        />
        <button onClick={handleSubmit} className='send-btn'>Send</button>
        </div>
        <div className='prediction-div'>
          {prediction && (
            <>
            <h3 > Prediction From Various ML Algorithms</h3>
              <p>Adaboost: {prediction.Adaboost}</p>
              <p>Logistic Regression: {prediction.LogisticRegression}</p>
              <p>Random Forest: {prediction.RandomForest}</p>
              <p>SVC: {prediction.SVC}</p>
              <p>XGB: {prediction.XGB}</p>
            </>
          )}
        </div> 

        {prediction !== null && ( 
          <div className='feedback-div'>
            <div className='feedback-text-div'>
              <h2>Your Feedback Helps Us Improve Our Prediction</h2>
            </div>
            <div className='button-div'>
              {success && (
                <div className='success'>
                  <p className='success-p'>Thanks for your Feedback!</p>
                </div>
              )}
              <p className='p-text'>Is This Prediction Correct?</p>
              <div className='button'>
                <button className='yes-btn' onClick={() => handleFeedback(1)}>Yes</button>
                <button className='no-btn' onClick={() => handleFeedback(0)}>No</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
