# Prompt bàn giao SmashFest

Bạn đang tiếp tục dự án SmashFest bằng Three.js, Vite và cannon-es. Repo là `trinhanh2604bn/SmashFest`, nhánh `main`. Trên máy chủ dự án, checkout đang dùng ở `D:\Smashfest\SmashFest-main`. Nếu tiếp tục ở máy khác, hãy xác nhận commit bàn giao đã có trên GitHub hoặc nhận Git bundle từ chủ dự án. Trước khi sửa hãy chạy `git status -sb` và xem commit hiện tại.

## Chạy bản đang làm

- Trong `lo-gom`, chạy `npm ci` rồi `npm run dev -- --host 127.0.0.1 --port 3101` để mở editor và game. Trong `xuong-asset`, làm tương tự với cổng 3100 để xem xưởng asset.
- Chạy `node --test tests/round-score.test.js` trong `lo-gom`. Chạy `npm run build` riêng ở cả hai thư mục.

## Những quyết định đã chốt

- Giữ pháo Lam Kim ở giữa, bàn ngang ở màn 2, nền Vịnh Nắng đã duyệt và các model GLB thực tế. Cơ chế va chạm chung nằm trong `shared/impact`, phần sân chơi thuộc `lo-gom/src/impact-playfield.js`.
- Editor ở trái, game ở phải. Thanh giữa chỉnh chiều rộng, thanh dưới chỉnh chiều cao. Trên điện thoại game nằm trên editor. Kích thước được lưu theo trình duyệt. Hai thanh hỗ trợ phím mũi tên và nhấp đúp để về mặc định.
- Thẻ vào màn, sạch chặng, thắng và hết đạn dùng font Nunito đóng gói cùng game. Hình trên thẻ là bản kết xuất từ hũ và thùng GLB. Khi hết đạn, cho vật đang rơi thời gian chạm đất trước khi phân định kết quả.
- Trong một lượt, mỗi mục tiêu nguyên vẹn ghi điểm một lần khi bị bắn trúng, chịu va chạm dây chuyền đủ mạnh, bị xô đổ hoặc chạm đất do một phát bắn. Mảnh vỡ không ghi thêm điểm. Để qua chặng vẫn cần dọn hết mục tiêu. Mỗi viên đạn có ID để theo dõi chuỗi qua cả va chạm và mất chân đỡ.
- Hai vật đầu mỗi vật được 100 điểm. Từ vật thứ ba, mức thưởng tăng thêm 50 cho mỗi bậc, tối đa 350 điểm mỗi vật. Các mốc combo 3, 4, 5–6 và từ 7 hiện Good!, Well done!, Awesome! và Incredible!, kèm chuông. Mức âm thanh tuân theo nút bật/tắt. Điểm cộng dồn qua chặng và đặt lại khi chơi lại hoặc đổi màn.
- Số sao ở màn thắng phụ thuộc lượng đạn đã dùng. Quy tắc nằm trong `lo-gom/src/round-score.js`. Phần trạng thái màn và cập nhật HUD nằm ở `lo-gom/src/main.js`.

## Kiểm tra khi làm tiếp

1. Kéo hai thanh trong lúc chơi, thử trên khung 390 × 844 và tải lại để kiểm tra kích thước đã lưu.
2. Màn 1, chọn lực Mạnh, bắt đầu và bắn trúng bằng phím cách. Kiểm tra điểm, sao và chuyển màn. Chơi lại rồi bắn trượt cả hai viên để kiểm tra hết đạn.
3. Màn Cột chịu lực, bắn vào hũ đỡ cột giữa. Kiểm tra vật phía trên được tính theo cùng phát đạn kể cả khi rơi muộn. Khi tắt âm vẫn phải thấy chữ combo.
4. Với màn nhiều chặng, kiểm tra số đạn và điểm sau khi bấm Chặng tiếp theo. Lượt chơi thử được ghi ở tab Chơi thử.

Chỉ push mốc bàn giao khi mức dùng 5 giờ của Codex đạt 90%, theo yêu cầu của chủ dự án. Trước khi push, kiểm tra trạng thái và lịch sử remote; giữ mọi commit của cộng tác viên. Nếu nhận việc mới, hãy đối chiếu các lựa chọn trên với yêu cầu mới nhất của chủ dự án.
