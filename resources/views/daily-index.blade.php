<x-guest-layout>
    <div class="h-screen bg-background flex flex-col">
        <x-navigation />
        <div class="mx-auto my-auto">
            <x-container>
                <div class="bg-white rounded-md">
                    <div class="grid grid-cols-2 gap-2">
                        <div class="p-6 space-y-4">
                            <p class="">
                                Hast auch du Lust auf Schellen verteilen? Dann melde dich jetzt an, oder registrier dich
                                <a href="{{route('register')}}" class="text-woodland-500">Hier!</a>
                            </p>

                            <x-login-form />
                        </div>
                        <div class="">
                            <img class="rounded-r-md object-cover h-full w-full" src="images/header.png" alt="hero">
                        </div>
                    </div>
                </div>
            </x-container>
        </div>
    </div>
</x-guest-layout>
