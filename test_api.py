from api.scan import app
import io

with app.test_client() as client:
    # Read the dummy image
    with open("dummy.jpg", "rb") as f:
        img_bytes = f.read()
    
    data = {
        'image': (io.BytesIO(img_bytes), 'dummy.jpg')
    }
    
    response = client.post('/api/scan', data=data, content_type='multipart/form-data')
    print(response.status_code)
    print(response.json)
