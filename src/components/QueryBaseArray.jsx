import React, { useState } from "react";
import axios from "axios";

const QueryBaseArray = () => {
	const [message, setMessage] = useState("");
	
	const queryBaseArray = () => {
		const inputURL = "http://localhost:5000/api/query-base-array-input";
		const outputURL = "http://localhost:5000/api/query-base-array-output";

	    axios.get(inputURL)
			.then(response => {
				const { token, data, query } = response.data;

				const n = data.length;
				let prefixSum = Array(n).fill(0);
				let oddEvenPrefix = Array(n).fill(0);

				prefixSum[0] = data[0];
				oddEvenPrefix[0] = data[0];

				for (let i = 1; i < n; i++) {
					prefixSum[i] = prefixSum[i - 1] + data[i];
					oddEvenPrefix[i] = oddEvenPrefix[i - 1] + (i % 2 === 0 ? data[i] : -data[i]);
				}

				let results = query.map(({ type, range }) => {
					let [l, r] = range;
					let totalSum = prefixSum[r] - (l > 0 ? prefixSum[l - 1] : 0);
					let altSum = oddEvenPrefix[r] - (l > 0 ? oddEvenPrefix[l - 1] : 0);
					return type === "1" ? totalSum : altSum;
				});
				
				axios.post(outputURL, { token, result: results })
				.then(response => {
					console.log("Gửi kết quả thành công:", response.data);
					setMessage("Gửi kết quả thành công");
				})
				.catch(error => {
					console.error("Lỗi xảy ra khi gửi kết quả:", error);
					setMessage("Gửi kết quả thất bại");
				});
			})
			.catch(error => {
				setMessage("Gửi kết quả thất bại");
			});
	};

	return (
		<div>
			<h2>Task 3: Chương trình thực hiện truy vấn trên mảng đã cho</h2>
			<button onClick={queryBaseArray}>Run</button>
			<p>{message}</p>
		</div>
	);
};

export default QueryBaseArray;
