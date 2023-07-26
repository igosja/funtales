import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {useForm} from '@inertiajs/react';
import {Transition} from '@headlessui/react';
import {FormEventHandler} from 'react';
import {Post} from '@/types';

export default function PostForm({post, className = ''}: { post: Post, className?: string }) {
    const {data, setData, put, errors, processing, recentlySuccessful} = useForm({
        text: post.text,
        title: post.title,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('post.store'))
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Post</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Create post.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="title" value="title"/>

                    <TextInput
                        id="title"
                        className="mt-1 block w-full"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.title}/>
                </div>

                <div>
                    <InputLabel htmlFor="text" value="text"/>

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.text}
                        onChange={(e) => setData('text', e.target.value)}
                        required
                    />

                    <InputError className="mt-2" message={errors.text}/>
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
