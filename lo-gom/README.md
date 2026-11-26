# Lò Gốm Náo Nhiệt

Prototype game vật lý 3D trên web. Three.js dựng cảnh và Cannon ES mô phỏng chuyển động, va chạm và chồng vật thể.

Chạy với Node.js 20.19+ hoặc 22.12+.

```sh
npm install
npm run dev
```

`npm run build` tạo bản tĩnh trong `dist/`. `npm run preview` phục vụ bản build để kiểm tra.

Nhấp hoặc chạm vào vật thể để bắn. Để chơi bằng bàn phím, dùng Tab để chọn sân chơi, phím mũi tên để ngắm và phím cách để bắn. Nhấn R để chơi lại.

Chọn **Góc thứ nhất** hoặc nhấn V để đổi giữa góc toàn cảnh và góc nhìn từ sau nòng pháo. Có thể đổi góc trong lúc chơi.

Game lấp đầy màn hình điện thoại theo chiều dọc. Trên màn hình rộng, sân chơi nằm giữa trang trong khung dọc tỷ lệ 9:19,5.

Game mở bằng góc nhìn thứ nhất với pháo ở dưới màn hình và mặt bàn nằm giữa sân. Bàn Lam Kim dùng cùng tệp GLB với Xưởng Asset 3D. Mặt bàn, vùng va chạm và khung nhìn được điều chỉnh theo bố cục của từng chặng.

Bối cảnh Vịnh Nắng dùng `src/models/vinh-nang.glb` từ Xưởng Asset 3D. Cảnh chạy cả hai clip Sóng ven bờ và Mây trôi trong lượt chơi.

Bảy màn dùng các bố cục Một vật, Hàng domino, Tháp 4–3–2, Cột chịu lực, Kim tự tháp xen kẽ, Hai trụ chung cầu và Pháo đài rỗng. Hai trụ dùng bàn trượt. Màn Pháo đài có hai chặng với bàn nâng hạ rồi bàn trượt và dùng chung 28 viên đạn. Bàn nâng hạ di chuyển mặt bàn và vật thể theo chiều dọc trong khi đế bàn nằm trên cát. Khi hết đạn, game chờ diễn biến vật lý trước khi chốt kết quả.

`src/levels.js` chọn bố cục và số đạn mỗi màn. `src/main.js` điều khiển lượt chơi và `src/arena.js` dựng sân chơi Three.js. Có ba mức bắn 11, 24 và 30 m/s.

Khẩu pháo dùng `src/models/lam-kim.glb` từ Xưởng Asset 3D. Game điều khiển trục ngắm theo mục tiêu, phát clip `Khai hỏa` và tạo chớp lửa ngay vành miệng pháo khi bắn.

`src/models/` chứa GLB của Xưởng Asset 3D và các vật thể trích từ `Ingredients/output/models/` trong gói ZIP Android v547. `src/models.js` ghép từng hũ và thùng với mẫu vỡ tương ứng. Khi vật vỡ, các phần của GLB trở thành các mảnh có collider và quán tính riêng.

`src/impact-playfield.js` áp dụng năng lượng tiếp xúc để xác định cú chạm nhẹ, sứt hoặc vỡ. Vật mất điểm tựa rơi theo trọng lực. Mảnh còn trên bàn và mảnh xuống sàn đều mờ dần sau va chạm. Game dùng chung bố cục, thông số vật lý, dấu sứt, khói, bụi, tia lửa và mẫu âm với Xưởng Asset qua `../shared/impact/`.
