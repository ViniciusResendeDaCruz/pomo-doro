import { MainTemplate } from '../../templates/MainTemplate';
import { RouterLink } from '../../components/RouterLink';

export function NotFound() {
  return (
    <MainTemplate>
      <section className='w-100 flex-grow-1 d-flex align-items-center mt-4'>
        <div className='container'>
          <div className='row align-items-center justify-content-center g-5 text-center text-lg-start'>
            <div className='col-12 col-lg-6 order-2 order-lg-1'>
              <p
                className='text-primary fw-semibold text-uppercase small mb-2'
                style={{ letterSpacing: '0.3em' }}
              >
                Erro 404
              </p>
              <h1 className='display-4 fw-bold text-body mb-3'>
                Ops! Essa página saiu para um intervalo
              </h1>
              <p className='text-neutral fs-5 mb-4'>
                O link que você tentou acessar não existe ou foi movido. Que tal
                voltar para o início e continuar seu foco?
              </p>
              <div className='d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start'>
                <RouterLink
                  href='/'
                  className='btn btn-primary btn-lg px-4 py-3 shadow-sm'
                >
                  Voltar para o início
                </RouterLink>
                <RouterLink
                  href='/info'
                  className='btn btn-outline-primary btn-lg px-4 py-3 border-2'
                >
                  Conhecer o projeto
                </RouterLink>
              </div>
              <div className='mt-4 text-body-secondary small'>
                <p className='mb-2 fw-semibold text-uppercase'>
                  Talvez você queira:
                </p>
                <ul className='list-unstyled mb-0'>
                  <li>• Verificar a URL digitada</li>
                  <li>• Acessar o menu para outras sessões</li>
                  <li>• Reportar o problema para nossa equipe</li>
                </ul>
              </div>
            </div>

            {/* <div className='col-12 col-lg-6 order-1 order-lg-2'>
              <div className='position-relative p-5 rounded-5 bg-body-secondary bg-opacity-25 border border-primary-subtle shadow-lg overflow-hidden'>
                <span className='badge text-bg-primary text-uppercase px-3 py-2 position-absolute top-0 start-50 translate-middle'>
                  Timer perdido
                </span>
                <div
                  className='display-1 fw-bold text-primary opacity-75'
                  aria-hidden='true'
                >
                  404
                </div>
                <p className='text-neutral mt-3 mb-0'>
                  O temporizador não encontrou esta rota, mas você ainda pode
                  manter o foco.
                </p>
                <span className='badge text-bg-light text-body-secondary position-absolute bottom-0 start-0 translate-middle-y ms-4 d-none d-md-inline-block shadow-sm'>
                  Pomodoro em pausa
                </span>
                <span className='badge text-bg-light text-body-secondary position-absolute bottom-0 end-0 translate-middle-y me-4 d-none d-md-inline-block shadow-sm'>
                  Respira + volta
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </MainTemplate>
  );
}
