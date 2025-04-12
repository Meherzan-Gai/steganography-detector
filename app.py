from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS
from PIL import Image
import io
import numpy as np

app = Flask(__name__)
CORS(app)

# Load your model at the start
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    try:
        img = Image.open(request.files['image'])
        processed_img = preprocess(img)
        input_array = np.array([processed_img])  # Wrap in list, then convert
        prediction = model.predict(input_array)
        if prediction[0][0] > 0.5:
            result = True
        else:
            result = False
        return jsonify({'steganography_detected': result})
    except Exception as e:
        print(f"Error during prediction: {e}")
        return jsonify({'error': str(e)}), 500
    


def preprocess(img):
    img = img.resize((512,512)).convert("RGB")
    pixels = np.array(img).flatten()
    lsb_array = pixels & 1

    usable_length = (len(lsb_array) // 8) * 8
    lsb_array = lsb_array[:usable_length]

    lsb_reshaped = lsb_array.reshape((-1, 8))
    powers = 2**np.arange(7, -1, -1)
    byte_values = np.dot(lsb_reshaped, powers).astype(np.float32)

    float_bytes = byte_values / 255.0
    return float_bytes.tolist()



if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)