self.__uv$config = {
    prefix: '/active/go/', // Keep this as /active/go/ since your browser URL routes to /active/go/
    bare: 'https://32867gd198764dg23vd23198746v4d69182736dvussis7.9882136.xyz/', // Your functional Bare server
    encodeUrl: Ultramarine.codec.xor.encode,
    decodeUrl: Ultramarine.codec.xor.decode,
    handler: '/active/uv.handler.js',
    client: '/active/uv.client.js',
    bundle: '/active/uv.bundle.js',
    config: '/active/uv.config.js',
    sw: '/active/uv-sw.js', // This must map directly to where GitHub Pages maps the file
};
