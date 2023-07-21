<template>
    <div>
        <header class="flex flex-col w-full items-center">
            <Header />
            <slot name="header"></slot>            
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>