import cv2
import numpy as np
image = cv2.imread('thug duck.jpeg', cv2.IMREAD_GRAYSCALE)
blurred = cv2.GaussianBlur(image, (5, 5), 0)
edges = cv2.Canny(blurred, 50, 150)
inverted_edges = cv2.bitwise_not(edges)
cv2.imshow('Original Image', image)
cv2.imshow('Edges', edges)
cv2.imshow('Sketch', inverted_edges)
cv2.waitKey(0)
cv2.destroyAllWindows()

