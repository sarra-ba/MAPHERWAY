import numpy as np
import librosa
import librosa.display  
import matplotlib.pyplot as plt
import firebase_admin
from firebase_admin import credentials, storage


cred = credentials.Certificate('path/to/your/serviceAccountKey.json')
firebase_admin.initialize_app(cred, {
    'storageBucket': 'your-project-id.appspot.com'
})

def audio_to_spectrogram(audio_file_path, output_image_path):
    try:
   
        y, sr = librosa.load(audio_file_path)
        
       
        D = librosa.stft(y)
        S_db = librosa.amplitude_to_db(np.abs(D), ref=np.max)
        plt.figure(figsize=(10, 4))
        librosa.display.specshow(S_db, sr=sr, x_axis='time', y_axis='log')
        plt.colorbar(format='%+2.0f dB')
        plt.title('Spectrogram')
        plt.savefig(output_image_path)
        plt.close()
    except Exception as e:
        print(f"An error occurred while creating the spectrogram: {e}")

def upload_to_firebase(file_path, destination_blob_name):
    try:
        bucket = storage.bucket()
        blob = bucket.blob(destination_blob_name)
        blob.upload_from_filename(file_path)
        print(f'File {file_path} uploaded to {destination_blob_name}.')
    except Exception as e:
        print(f"An error occurred while uploading to Firebase: {e}")


audio_file = 'path/to/your/audiofile.wav'
spectrogram_image = 'spectrogram.png'

audio_to_spectrogram(audio_file, spectrogram_image)
upload_to_firebase(spectrogram_image, 'spectrograms/spectrogram.png')
