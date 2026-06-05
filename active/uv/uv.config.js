self.__uv$config = {
    prefix: '/active/go/',
    bare: 'https://what-0pyz.onrender.com/', // Your fixed Render server URL
    encodeUrl: Ultramarine.codec.xor.encode,
    decodeUrl: Ultramarine.codec.xor.decode,
    handler: 'uv/uv.handler.js',
    client: 'uv/uv.client.js',
    bundle: 'uv/uv.bundle.js',
    config: 'uv/uv.config.js',
    sw: 'uv/uv-sw.js',
};
