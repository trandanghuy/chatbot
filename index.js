const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Webhook endpoint nhận dữ liệu từ Dialogflow
app.post('/webhook', async (req, res) => {
    const queryResult = req.body.queryResult;

    // Xử lý câu trả lời từ Dialogflow
    if (queryResult.intent.displayName === 'Tư vấn tuyển sinh') {
        res.json({
            fulfillmentText: 'Chào bạn, tôi có thể tư vấn về các ngành học và chương trình tuyển sinh của trường. Bạn cần tư vấn gì?'
        });
    } else {
        res.json({
            fulfillmentText: 'Xin lỗi, tôi không hiểu câu hỏi của bạn. Bạn có thể hỏi lại không?'
        });
    }
});

app.listen(port, () => {
    console.log(`Backend chạy tại http://localhost:${port}`);
});
