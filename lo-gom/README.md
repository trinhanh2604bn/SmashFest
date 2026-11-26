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

Game mở bằng góc nhìn thứ nhất. Bàn Lam Kim dùng cùng tệp GLB với Xưởng Asset 3D. Khi bắt đầu mỗi chặng, chiều rộng và chiều sâu của mặt bàn và vùng va chạm được tính từ kích thước cụm vật ban đầu với mép đệm 0,11 đơn vị mỗi bên.

Bối cảnh Vịnh Nắng dùng `src/models/vinh-nang.glb` từ Xưởng Asset 3D. Cảnh chạy cả hai clip Sóng ven bờ và Mây trôi trong lượt chơi.

Ba màn lần lượt giới thiệu bàn tĩnh, bàn trượt và một thử thách hai chặng có bàn xoay. Đạn được dùng chung giữa các chặng. Khi hết đạn, game chờ diễn biến vật lý trước khi chốt kết quả.

`src/main.js` chứa dữ liệu màn, luật và điều khiển. `src/arena.js` dựng sân chơi Three.js. Hiệu ứng âm thanh được tổng hợp bằng Web Audio.

Khẩu pháo dùng `src/models/lam-kim.glb` từ Xưởng Asset 3D. Game điều khiển trục ngắm theo mục tiêu và phát clip `Khai hỏa` nhúng trong GLB cho mỗi phát bắn.

`src/models/` chứa GLB của Xưởng Asset 3D và các vật thể trích từ `Ingredients/output/models/` trong gói ZIP Android v547. `src/models.js` ghép từng hũ và thùng với mẫu hư hại tương ứng. Hũ thường dùng mẫu `3DParticle_1x1`, hũ đỏ cao dùng `JamJar_Strawberry_3DParticle_1x2.glb` và thùng dùng `Box_3DParticle_1x1.glb`. Các mesh trong mẫu hư hại giữ nguyên bố cục của GLB và cùng di chuyển theo vật thể.

`BreakableObject.cs` trong ZIP khai báo ngưỡng tốc độ 18. Bản web dùng ngưỡng này cho cả hũ và thùng để quyết định đổi GLB. Cú nhẹ giữ mẫu nguyên. Sau khi vật thể chạm sàn, `src/target-visual.js` xử lý mờ dần. Năm cặp GLB hũ thường cho va chạm và chạm sàn có cùng dữ liệu, nên mỗi hũ dùng chung một mẫu hư hại trong bản web.

`src/target-impact.js` thiết lập khối lượng đạn, collider dạng trụ cho hũ, collider dạng hộp cho thùng, và hệ số tiếp xúc. Cannon ES giải va chạm tại điểm chạm rồi mô phỏng trọng lực, quán tính và va chạm dây chuyền. Đạn biến mất sau va chạm đầu tiên với mục tiêu đủ lực, bàn hoặc sàn. Trang Thử va chạm của Xưởng Asset dùng cùng các thông số vật lý và các cặp GLB.
