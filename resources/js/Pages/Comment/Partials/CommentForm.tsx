import {Article} from '@/types';
import {FormEventHandler, useState} from 'react';
import {Transition} from '@headlessui/react';
import {useForm} from '@inertiajs/react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function CommentForm({article}: { article: Article }) {
    const [validated, setValidated] = useState(false);
    const {data, setData, post, errors, processing, recentlySuccessful} = useForm({
        article_id: article.id,
        text: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('comment.store'));
        setValidated(true);
    };

    return (
        <section>
            <Form noValidate validated={validated} onSubmit={submit}>
                <Form.Group className="mb-3">
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                        as="textarea"
                        autoFocus
                        isInvalid={!!errors.text}
                        onChange={(e) => setData('text', e.target.value)}
                        required
                        value={data.text}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.text}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={processing}>
                    Save
                </Button>

                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-gray-600">Saved</p>
                </Transition>
            </Form>
        </section>
    );
}
