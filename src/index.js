import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App(){
  return(
    <>
      <div className='card'>
        <Avatar />
        <div className='data'>
          <Intro />
          <SkillList />
    
        </div>
      </div>
    </>
  );
}

function SkillList(){
  return(
    <div className='skill-list'>
      <Skill skill='video editing' emoji='👶🏻' color='red' />
      <Skill skill='Html' emoji='👶🏻' color='blue' />
      <Skill skill='Css' emoji='👶🏻' color='orange' />
      <Skill skill='Python' emoji='👶🏻' color='violet' />

    </div>

  );
}

function Skill(props){
  return(
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>

    </div>

  );
}

function Intro(){
  return(
    <div>
      <h1>นายปารมี แก้วพวง</h1>
      <p>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์ 
        มหาวิทยาลัยอุบลราชธานี สนใจในการตัดต่อวิดีโอ
      </p>

    </div>

  );
}

function Avatar() {
  return <img className='avatar' src={require('.tong.jpg')} alt='My Avatar'></img>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
