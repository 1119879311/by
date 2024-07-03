import { KoaNestTs, Logger } from '@bylive/nestjs';
import { appModule } from './app.module';
import { setStateMiddleware } from './share/middlewares';
import { authGuards } from './share/guards';
import { ValidationPip } from './share/pipes';

Logger.setting({
  info:{write:true}
})

Logger.info("lslslsl1212")

function start() {
  const app = KoaNestTs.create(appModule, { prefix: '/adminConsole' });
  app.use(setStateMiddleware);
  app.setGlobalGuard(authGuards);
  app.setGlobalPip(new ValidationPip());
  app.listen(8080, () => {
    Logger.info('app is runing in prot 8080');
  });
}
start();
