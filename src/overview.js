

const Overview=()=>{

    return(
        <div className="about-div">
            <div>
            <h2>About SafeMail</h2>
    <p className='overview-p'>Spam mail is increasing at an alarming rate due to the massive adoption of the internet for business, education, health, entertainment, etc. The increasing rate of spam mails poses a significant cybersecurity threat because they can carry malicious links,
                 phishing scams, or malware attachments, which can compromise personal data, 
                 financial information, or entire networks. By filtering out spam, SafeMail helps reduce these vulnerabilities, protecting both individual users and larger systems from potential threats.
SafeMail is a machine learning-based model designed to identify whether an email is spam or not.
 Five different algorithms—Adaboost, Random Forest, Logistic Regression, Support Vector Classifier (SVC), and XGBoost—were incorporated in the model to display predictions of each algorithm, which helps in understanding the accuracy of each algorithm and making better decisions in selecting classification algorithms.
SafeMail combines the strengths of multiple algorithms to improve the detection rate of spam emails, 
enhancing the overall security of digital communications. Its goal is to provide a reliable tool for
 identifying suspicious messages before they reach users, minimizing the chance of falling victim to
  cyberattacks.</p>
  </div>
        </div>
    )
}
export default Overview;