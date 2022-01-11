document.addEventListener("DOMContentLoaded", () => {

    const input = document.querySelector('input[type="file"]');
    input.addEventListener('change', function (e) {
        console.log(input.files);
        const reader = new FileReader();
        reader.onload = function () {
            // const lines = reader.result.split('\n').map(function (line) {
            //     return line.split(',');
            // });
            // console.log(lines);
            const img = new Image();

            img.onload = function () {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                context.drawImage(img, 0, 0);

                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                for (let i = 0; i <= data.length; i += 4) {
                    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                    data[i] = avg;
                    data[i + 1] = avg;
                    data[i + 1] = avg;
                }
                context.putImageData(imageData, 0, 0)
                // document.body.appendChild(canvas);
                // canvas.toDataURL();
                // const csvfile = new Blob(['one,two,three'], {type: 'text/csv'})
                canvas.toBlob(function (blob){
                    const form = new FormData();
                    form.append('image', blob, 'mody.jpg');
                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', '/imageupload', true);
                    xhr.send(form);
                })
            }
            img.src = reader.result;
            document.body.appendChild(img);
        }
        // reader.readAsText(input.files[0]);
        reader.readAsDataURL(input.files[0]);
    }, false)
//     const imgWrapper = document.querySelector(".image-wrapper");
//     const img = document.querySelector(".image-wrapper img");
//     const imgName = document.querySelector(".img-name");
//     const imgDimensions = document.querySelector(".img-dimensions");
//     console.log(img);
//     console.dir(img);
//     const name = img.currentSrc.split("/");
//     const naturalWidth = img.naturalWidth;
//     const naturalHeight = img.naturalHeight;
//     console.log(name);
//     console.log(naturalWidth);
//     console.log(naturalHeight);
//     imgName.textContent = `Nazwa pliku: ${name[name.length - 1]}`
//     imgDimensions.textContent = `Wymiary rzeczywiste: ${naturalWidth}x${naturalHeight}px`
// const h2 = document.createElement("h2");
//     h2.innerText = `${readableBytes(img.size)}`
//    imgWrapper.appendChild(h2);
//
// console.log(img.crossOrigin);
//
//
//     function readableBytes(bytes) {
//         const i = Math.floor(Math.log(bytes) / Math.log(1024)),
//             sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
//
//         return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
//     }
});