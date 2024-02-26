import { Link } from 'react-router-dom'

const Public = () => {
  return (
    <section className='bg-[#1c2f4d] p-4 text-slate-400'>
      <header>
        <h1 className='text-2xl text-slate-200'>Welcome to Repair Store!</h1>
      </header>
      <main className='my-4'>
        <p>
          Located in Beautiful Downtown Foo City, Repair Store provides a trained staff ready to meet your repair needs.
        </p>
        <p>&nbsp;</p>
        <address>
          Repair Store
          <br />
          555 Foo Drive
          <br />
          Foo City, CA 12345
          <br />
          <a href='tel:+15555555555'>(555) 555-5555</a>
        </address>
      </main>
      <footer className='cursor-pointer rounded-lg bg-[#1e293b] p-[12px] hover:opacity-70'>
        <Link to='/login' className='font-semibold text-slate-100'>
          -&gt; Go to Employee Login Page
        </Link>
      </footer>
    </section>
  )
}

export default Public
