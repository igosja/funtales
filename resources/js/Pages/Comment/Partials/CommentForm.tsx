import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {useForm} from '@inertiajs/react';
import {Transition} from '@headlessui/react';
import {FormEventHandler} from 'react';
import {Post} from '@/types';

export default function CommentForm({post, className = ''}: { post: Post, className?: string }) {
    const {data, setData, put, errors, processing, recentlySuccessful} = useForm({
        post_id: post.id,
        text: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('comment.store'))
    };

    return (
        <section className={className}>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <TextInput
                    id="post_id"
                    className="mt-1 block w-full"
                    value={data.post_id}
                    onChange={(e) => setData('post_id', e.target.valueAsNumber)}
                    type="hidden"
                    required
                />
                <div>
                    <InputLabel htmlFor="text" value="text"/>

                    <TextInput
                        id="text"
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
