import React from 'react';
import VoiceRecorder from './voicerecorder';

const RecordPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Record Your Voice</h1>
      <VoiceRecorder />
    </div>
  );
};

export default RecordPage;
