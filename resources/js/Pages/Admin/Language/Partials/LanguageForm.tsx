import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {useForm} from '@inertiajs/react';
import {Transition} from '@headlessui/react';
import {FormEventHandler} from 'react';
import {Language} from '@/types';
import Checkbox from "@/Components/Checkbox";

export default function LanguageForm({language, className = ''}: { language: Language, className?: string }) {
    const {data, setData, put, post, errors, processing, recentlySuccessful} = useForm({
        id: language.id,
        code: language.code,
        name: language.name,
        is_active: language.is_active,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        if (language.id) {
            put(route('admin.language.update', {language: language}));
        } else {
            post(route('admin.language.store'))
        }
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Language</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update language.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="code" value="Code"/>

                    <TextInput
                        id="code"
                        className="mt-1 block w-full"
                        value={data.code}
                        onChange={(e) => setData('code', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.code}/>
                </div>

                <div>
                    <InputLabel htmlFor="name" value="name"/>

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError className="mt-2" message={errors.name}/>
                </div>

                <div>
                    <InputLabel htmlFor="is_active" value="Is active"/>

                    <Checkbox
                        id="is_active"
                        checked={data.is_active}
                        onChange={(e) => setData('is_active', e.target.checked)}
                    />

                    <InputError className="mt-2" message={errors.name}/>
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
