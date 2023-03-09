let connexions = new Set();
exports.sse = (request, response, next)  => {
    response.initStream = () => {
        console.log('Client connected')
        response.setHeader('Content-Type', 'text/event-stream')
        response.setHeader('Cache-Control', 'no-cache')
        response.setHeader('Connection', 'keep-alive')
        connexions.add(response)
        const intervalId = setInterval(() => {
            response.write(`\n\n`)
        },1000)
        response.on('close', () => {
            console.log('Client closed connection')
            clearInterval(intervalId);
            response.end();
            connexions.delete(response);
        })
    }
    response.sendSSE = (data, eventName) => {
        for (const item of connexions) {
            item.write('number: '+0+'\n');
            item.write('data: '+data+'\n');
            item.write('event: '+eventName+'\n');
        }
    }
    next();
}


