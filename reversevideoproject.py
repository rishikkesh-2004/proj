import cv2
input_video = 'bird.mp4'
cap = cv2.VideoCapture(input_video)
fps = int(cap.get(cv2.CAP_PROP_FPS))
frame_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
frame_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
output_video = 'reversed_bird.mp4'
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
out = cv2.VideoWriter(output_video, fourcc, fps, (frame_width, frame_height))
frame_list = []
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    
    frame_list.append(frame)
for i in range(len(frame_list) - 1, -1, -1):
    out.write(frame_list[i]) 
    out.write(frame_list[i])  
cap.release()
out.release()
cv2.destroyAllWindows()
