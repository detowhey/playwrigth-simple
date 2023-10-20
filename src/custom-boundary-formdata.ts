import FormData from 'form-data';

export class CustomBoundaryFormData extends FormData {
    public constructor() {
        super();
    }

    public getBoundary(): string {
        return '----------------------------';
    }
}