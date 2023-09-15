import {useForm} from '@inertiajs/react';
import {Transition} from '@headlessui/react';
import {FormEventHandler, useState} from 'react';
import {Article} from '@/types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ArticleForm({article, className = ''}: { article: Article, className?: string }) {
    const [validated, setValidated] = useState(false);
    const {data, setData, post, errors, processing, recentlySuccessful} = useForm({
        text: article.text,
        title: article.title,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('article.store'));
        setValidated(true);
        ;
    };

    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Article</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Create article.
                </p>
            </header>

            <Form noValidate validated={validated} onSubmit={submit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        autoFocus
                        isInvalid={!!errors.title}
                        onChange={(e) => setData('title', e.target.value)}
                        required
                        value={data.title}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.title}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                        as="textarea"
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
