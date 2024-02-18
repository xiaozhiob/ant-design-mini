import { Form } from '../../../src/Form/form';
Page({
    onLoad() {
        this.form = new Form({
            initialValues: {
                account: 'lily',
                address: 'alipay',
                needDelivery: true,
                quantity: 1,
            },
        });
        if (this.formRefList) {
            this.formRefList.forEach((ref) => {
                this.form.addItem(ref);
            });
        }
    },
    handleRef(ref) {
        if (!this.formRefList) {
            this.formRefList = [];
        }
        this.formRefList.push(ref.detail);
    },
    reset() {
        this.form.reset();
    },
    async submit() {
        const values = await this.form.submit();
        console.log(values);
    },
});
