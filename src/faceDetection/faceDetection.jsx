import React, { useEffect, useState } from 'react';
import './faceDetection.css';
import * as faceapi from 'face-api.js';
function FaceDetection() {
	const MODEL_URL = '/models';
	useEffect(() => {
		Promise.all([
			faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
			faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
			faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
			faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
		])
			.then(startVideo())
			.then(graphics());
	});

	function startVideo() {
		const video = document.getElementById('video');
		navigator.getUserMedia(
			{
				video: {},
			},
			(stream) => (video.srcObject = stream),
			(err) => console.log(err)
		);
	}
	function graphics() {
		const video = document.getElementById('video');
		video.addEventListener('play', () => {
			const canvas = faceapi.createCanvasFromMedia(video);
			document.getElementById('frame').appendChild(canvas);
			const displaySize = { width: video.width, height: video.height };
			faceapi.matchDimensions(canvas, displaySize);
			setInterval(async () => {
				const detections = await faceapi
					.detectAllFaces(
						video,
						new faceapi.TinyFaceDetectorOptions({ inputSize: 416 })
					)
					.withFaceLandmarks()
					.withFaceExpressions();
				const rezizedDetections = faceapi.resizeResults(
					detections,
					displaySize
				);
				canvas
					.getContext('2d')
					.clearRect(0, 0, canvas.width, canvas.height);
				faceapi.draw.drawDetections(canvas, rezizedDetections);
				faceapi.draw.drawFaceExpressions(canvas, rezizedDetections);
			}, 100);
		});
	}
	return (
		<div>
			<div id='frame'>
				<video
					id='video'
					width='720'
					height='560'
					autoPlay
					muted></video>
				<button type='radio'>hei</button>
			</div>
		</div>
	);
}

export default FaceDetection;
