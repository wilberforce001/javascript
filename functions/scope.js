const x = 1

        function a() {
            const y = 2;
        }

        function b() {
            const z = 2;
        }

        function output(value) {
            const para = document.createElement('p');
            document.body.appendChild(para);
            para.textContent = 'Value: ${value}';
        }

        output(y)
        