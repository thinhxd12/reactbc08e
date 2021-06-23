import React from 'react'
//Cú pháp tạo function component: rfc

//Tạo 1 thẻ <FunctionComponent/>
export default function FunctionComponent() {

    //Lệnh return chứa giao diện của thẻ. Lưu ý giao diện của thẻ phải được bao phủ bởi 1 thẻ duy nhất thường là thẻ div
    return (
        <div>
            <section className="p-2 bg-dark">
                <div className="text-white display-4">Tittle</div>
                <div>content content content content content content</div>
                <div>content content content content content content</div>
            </section>
        </div>
    )
}
